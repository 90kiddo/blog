"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">ThoughtSpace</Link>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <Link
            className="hover:font-semibold hover:scale:105 transitin-transform duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:font-semibold hover:scale:105 transitin-transform duration-300"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:font-semibold hover:scale:105 transitin-transform duration-300"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="hover:font-semibold hover:scale:105 transitin-transform duration-300"
            href="/contact"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <Link href="/login">
            <Button className="mx-1 cursor-pointer" variant="outline">
              Login
            </Button>
            </Link>
            <Link href="/login">
            <Button className="mx-1 cursor-pointer" variant="outline">
              Signup
            </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <span className="mx-2"> 
                            <ModeToggle />
                        </span>
            <SheetTrigger>
              
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
             
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">ThoughtSpace</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link className="hover:text-gray-300" href="/">
                      Home
                    </Link>
                    <Link className="hover:text-gray-300" href="/about">
                      About
                    </Link>
                    <Link className="hover:text-gray-300" href="/blog">
                      Blog
                    </Link>
                    <Link className="hover:text-gray-300" href="/contact">
                      Contact
                    </Link>
                    <div>
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        Signup
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
