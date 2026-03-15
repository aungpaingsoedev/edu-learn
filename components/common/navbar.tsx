"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Book,
  ChevronDown,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Search,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";

export default function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="border-b bg-background fixed top-0 z-20 w-full">
      <div className="container flex h-16 w-full items-center justify-between px-4 md:px-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="hidden text-xl font-bold text-primary md:inline-block">
              EduLearn
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-primary"
          >
            Dashboard
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium hover:text-primary"
          >
            Categories
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 p-0">
                <span className="text-sm font-medium">Courses</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem>
                <Link href="/courses" className="flex w-full">
                  All Courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/courses/my-course" className="flex w-full">
                  My Courses
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/resources"
            className="text-sm font-medium hover:text-primary"
          >
            Resources
          </Link>

          <Link
            href="/community"
            className="text-sm font-medium hover:text-primary"
          >
            Community
          </Link>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex relative w-64 lg:w-80">
          <Input
            type="search"
            placeholder="Search courses..."
            className="w-full bg-muted pr-8"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <ModeToggle />

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  3
                </Badge>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-2">
                <span className="text-sm font-medium">Notifications</span>
                <Button variant="ghost" size="sm" className="text-xs">
                  Mark all as read
                </Button>
              </div>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 p-3 hover:bg-muted">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={`/placeholder.svg?height=36&width=36`}
                        alt="Avatar"
                      />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">New course update</span>{" "}
                        in{" "}
                        <span className="font-medium">
                          Web Development Fundamentals
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <DropdownMenuSeparator />
              <div className="p-2 text-center">
                <Link
                  href="/notifications"
                  className="text-xs text-primary hover:underline"
                >
                  View all notifications
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 ml-1"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/images/ian-dooley-C6BrEIucDDU-unsplash.jpg"
                    alt="User"
                    className="object-cover"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/images/ian-dooley-C6BrEIucDDU-unsplash.jpg"
                    alt="User"
                    className="object-cover"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">
                    john.doe@example.com
                  </span>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/profile"
                  className="flex w-full items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/dashboard"
                  className="flex w-full items-center gap-2"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/courses/my-course"
                  className="flex w-full items-center gap-2"
                >
                  <Book className="h-4 w-4" />
                  <span>My Courses</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/settings" className="flex w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/help" className="flex w-full">
                  Help Center
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button className="flex w-full">Sign out</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-3 pt-6 ps-5">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-medium"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </Link>
                <div className="space-y-3">
                  <div className="font-medium">Courses</div>
                  <div className="ml-4 flex flex-col gap-2">
                    <Link
                      href="/courses"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      All Courses
                    </Link>
                    <Link
                      href="courses/my-course"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      My Courses
                    </Link>
                    <Link
                      href="/categories"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Categories
                    </Link>
                  </div>
                </div>
                <Link
                  href="/resources"
                  className="flex items-center gap-2 text-lg font-medium"
                >
                  Resources
                </Link>
                <Link
                  href="/community"
                  className="flex items-center gap-2 text-lg font-medium"
                >
                  Community
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search (Conditional) */}
      {isSearchOpen && (
        <div className="border-t p-2 md:hidden">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search courses..."
              className="w-full bg-muted pr-8"
            />
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      )}
    </nav>
  );
}
