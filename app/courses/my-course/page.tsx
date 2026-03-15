"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  CheckCircle,
  Clock,
  Download,
  MoreHorizontal,
  PlayCircle,
  Search,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function MyCourses() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample in-progress courses data
  const inProgressCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern websites",
      instructor: "Sarah Johnson",
      progress: 68,
      image: "/images/pexels-abby-chung-371167-1106468.jpg",
      category: "Development",
      lastAccessed: "Yesterday",
      nextLesson: "CSS Flexbox Layout",
      nextLessonDuration: "45 min",
      totalLessons: 42,
      completedLessons: 28,
      certificate: false,
    },
    {
      id: 2,
      title: "Data Science Essentials",
      description: "Master data analysis, visualization, and machine learning",
      instructor: "Michael Chen",
      progress: 42,
      image: "/images/pexels-buro-millennial-636760-1438081.jpg",
      category: "Data Science",
      lastAccessed: "3 days ago",
      nextLesson: "Statistical Analysis with Python",
      nextLessonDuration: "60 min",
      totalLessons: 38,
      completedLessons: 16,
      certificate: false,
    },
    {
      id: 3,
      title: "UX Design Principles",
      description: "Create user-centered designs that solve real problems",
      instructor: "Emma Rodriguez",
      progress: 89,
      image: "/images/pexels-iqwan-alif-493640-1206101.jpg",
      category: "Design",
      lastAccessed: "Today",
      nextLesson: "User Testing Methods",
      nextLessonDuration: "30 min",
      totalLessons: 36,
      completedLessons: 32,
      certificate: false,
    },
  ];

  // Sample completed courses data
  const completedCourses = [
    {
      id: 4,
      title: "Introduction to Python Programming",
      description: "Learn Python basics and programming fundamentals",
      instructor: "James Wilson",
      image: "/images/pexels-pixabay-301920.jpg",
      category: "Development",
      completedDate: "April 15, 2023",
      rating: 5,
      totalLessons: 32,
      certificate: true,
    },
    {
      id: 5,
      title: "Digital Marketing Fundamentals",
      description: "Master the basics of digital marketing strategies",
      instructor: "Lisa Thompson",
      image: "/images/pexels-abby-chung-371167-1106468.jpg",
      category: "Marketing",
      completedDate: "March 22, 2023",
      rating: 4,
      totalLessons: 28,
      certificate: true,
    },
    {
      id: 6,
      title: "Project Management Essentials",
      description: "Learn the fundamentals of project management",
      instructor: "Robert Garcia",
      image: "/images/pexels-rebecca-zaal-252062-764681.jpg",
      category: "Business",
      completedDate: "February 10, 2023",
      rating: 5,
      totalLessons: 24,
      certificate: true,
    },
  ];

  // Sample archived courses data
  const archivedCourses = [
    {
      id: 7,
      title: "Introduction to Graphic Design",
      description: "Learn the basics of graphic design principles",
      instructor: "Sophia Lee",
      progress: 15,
      image: "/images/pexels-rebecca-zaal-252062-764681.jpg",
      category: "Design",
      archivedDate: "January 5, 2023",
    },
    {
      id: 8,
      title: "Business Analytics",
      description: "Learn how to analyze business data for insights",
      instructor: "Daniel Brown",
      progress: 22,
      image: "/images/pexels-zhuhehuai-716276.jpg",
      category: "Business",
      archivedDate: "December 12, 2022",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Learning</h1>
          <p className="text-muted-foreground">
            Track and manage your enrolled courses
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search my courses..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Link href="/courses">
            <Button>Browse Courses</Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="in-progress" className="space-y-8">
        <TabsList className="w-full justify-start border-b pb-px">
          <TabsTrigger
            value="in-progress"
            className="relative rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary"
          >
            In Progress ({inProgressCourses.length})
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="relative rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary"
          >
            Completed ({completedCourses.length})
          </TabsTrigger>
          <TabsTrigger
            value="archived"
            className="relative rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary"
          >
            Archived ({archivedCourses.length})
          </TabsTrigger>
        </TabsList>

        {/* In Progress Courses */}
        <TabsContent value="in-progress" className="space-y-6">
          {inProgressCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/4 aspect-video md:aspect-auto md:min-h-[140px]">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline">{course.category}</Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Add to favorites</DropdownMenuItem>
                        <DropdownMenuItem>Share course</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Archive course</DropdownMenuItem>
                        <DropdownMenuItem>Unenroll</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <h3 className="mb-1 text-xl font-bold">{course.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>
                        {course.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {course.completedLessons} of {course.totalLessons}{" "}
                        lessons completed
                      </span>
                      <span>Last accessed: {course.lastAccessed}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <PlayCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Continue Learning</h4>
                        <p className="text-xs text-muted-foreground">
                          {course.nextLesson} • {course.nextLessonDuration}
                        </p>
                      </div>
                    </div>
                    <Button>Resume Course</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Completed Courses */}
        <TabsContent value="completed" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.category}</Badge>
                    {course.certificate && (
                      <Badge variant="secondary" className="gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Certified
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="line-clamp-1 mt-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>
                        {course.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < course.rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                    </div>
                    <span className="text-sm font-medium">Your rating</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Completed on {course.completedDate}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2 border-t bg-muted/50 px-6 py-3">
                  {course.certificate ? (
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Certificate
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      No Certificate
                    </Button>
                  )}
                  <Button>Review Course</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Archived Courses */}
        <TabsContent value="archived" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archivedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover opacity-70"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge variant="outline" className="text-muted-foreground">
                      Archived
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-1 mt-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>
                        {course.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Archived on {course.archivedDate}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-medium">
                      Progress: {course.progress}%
                    </span>
                    <Progress value={course.progress} className="h-2 flex-1" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2 border-t bg-muted/50 px-6 py-3">
                  <Button variant="outline">Unarchive</Button>
                  <Button>Resume Course</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
