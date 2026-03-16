"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/lib/schema";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { DataTable } from "@/components/data-table";
import { columns, User } from "@/components/columns";
import { Controller } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  fetchUsers,
  createUser,
  updateUser as updateUserApi,
  deleteUser as deleteUserApi,
} from "@/lib/api";

type UserFormData = z.infer<typeof userSchema>;

export default function AboutPage() {
  const queryClient = useQueryClient();

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);



  const addForm = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });



  const editForm = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });



  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

 

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      const newUser: User = {
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
      };

      queryClient.setQueryData<User[]>(["users"], (oldUsers = []) => [
        newUser,
        ...oldUsers,
      ]);

      addForm.reset();
    },
  });

  const onSubmit = (data: UserFormData) => {
    console.log("Submitted form data:", data);
    createMutation.mutate(data);
  };


  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UserFormData }) =>
      updateUserApi(id, data),

    onSuccess: (_, variables) => {
      queryClient.setQueryData<User[]>(["users"], (oldUsers = []) =>
        oldUsers.map((user) =>
          user.id === variables.id ? { ...user, ...variables.data } : user,
        ),
      );
    },
  });

  const updateUser = (data: UserFormData) => {
    if (!editingUser) return;

    if (typeof editingUser.id === "number") {
      updateMutation.mutate({
        id: editingUser.id,
        data,
      });
    }

    queryClient.setQueryData<User[]>(["users"], (oldUsers = []) =>
      oldUsers.map((user) =>
        user.id === editingUser.id ? { ...user, ...data } : user,
      ),
    );

    setEditingUser(null);
    setOpen(false);
  };



  const deleteMutation = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: (_, id) => {
      queryClient.setQueryData<User[]>(["users"], (oldUsers = []) =>
        oldUsers.filter((user) => user.id !== id),
      );
    },
  });

  const deleteUser = (id: number) => {
    deleteMutation.mutate(id);
  };



  const editUser = (user: User) => {
    setEditingUser(user);

    editForm.reset({
      name: user.name,
      email: user.email,
    });

    setOpen(true);
  };



  if (isLoading) {
    return <p className="text-center mt-10">Loading users...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-bold">Users Data Table</h1>

     

      <form
        onSubmit={addForm.handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1 space-y-2">
          <Controller
            control={addForm.control}
            name="name"
            render={({ field }) => (
              <Input placeholder="Enter your name" {...field} />
            )}
          />
          {addForm.formState.errors.name && (
            <p className="text-sm text-red-500">
              {addForm.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="flex-1 space-y-2">
          <Controller
            control={addForm.control}
            name="email"
            render={({ field }) => (
              <Input placeholder="Enter your email" {...field} />
            )}
          />
          {addForm.formState.errors.email && (
            <p className="text-sm text-red-500">
              {addForm.formState.errors.email.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white cursor-pointer"
        >
          Add User
        </Button>
      </form>

      

      <div className="w-full overflow-x-auto">
        <DataTable columns={columns(deleteUser, editUser)} data={users} />
      </div>


      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>

          <form
            onSubmit={editForm.handleSubmit(updateUser)}
            className="space-y-4"
          >
            <div>
              <Label>Name</Label>
              <Controller
                control={editForm.control}
                name="name"
                render={({ field }) => <Input {...field} />}
              />
            </div>

            <div>
              <Label>Email</Label>
              <Controller
                control={editForm.control}
                name="name"
                render={({ field }) => <Input {...field} />}
              />
            </div>

            <Button type="submit">Update User</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
