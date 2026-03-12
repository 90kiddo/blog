"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AboutPage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {
    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...data } : user,
        ),
      );

      setEditingUser(null);
    } else {
      const newUser = {
        id: Date.now(),
        ...data,
      };

      setUsers([...users, newUser]);
    }

    form.reset();
  };

  const editUser = (user) => {
    setEditingUser(user);

    form.setValue("name", user.name);
    form.setValue("email", user.email);

    setOpen(true);
  };

  const updateUser = (data) => {
    setUsers(
      users.map((user) =>
        user.id === editingUser.id ? { ...user, ...data } : user,
      ),
    );

    setEditingUser(null);
    setOpen(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <h1 className="text-2xl font-bold">Users Data Table</h1>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-4 sm:items-end"
      >
        <div className="flex-1 space-y-2">
          <Input placeholder="Enter your name" {...form.register("name")} />
        </div>

        <div className="flex-1 space-y-2">
          <Input placeholder="Enter your Email" {...form.register("email")} />
        </div>

        <Button
          type="submit"
          className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-medium px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
        >
          Add User
        </Button>
      </form>

      <div className="w-full overflow-x-auto">
        <DataTable columns={columns(deleteUser, editUser)} data={users} />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white dark:bg-zinc-900 border shadow-xl rounded-lg p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-semibold">
              Edit User
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(updateUser)} className="space-y-5">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input {...form.register("name")} className="w-full" />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input {...form.register("email")} className="w-full" />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-medium px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200" type="submit">Update User</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
