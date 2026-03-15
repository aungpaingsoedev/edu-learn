"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Filter, Search, Star, Users } from "lucide-react";

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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CategoryDetail() {
  // This would typically come from route params
  const categoryId = "development";

  // Sample category data
  const category = {
    id: "development",
    name: "Development",
    description:
      "Learn programming, web development, mobile app creation, and more. Our development courses cover a wide range of languages and frameworks to help you build anything you can imagine.",
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-blue-500/10 text-blue-500",
    courseCount: 1245,
    subcategories: [
      { id: "web-development", name: "Web Development", count: 487 },
      { id: "mobile-apps", name: "Mobile Apps", count: 245 },
      { id: "game-development", name: "Game Development", count: 132 },
      { id: "databases", name: "Databases", count: 98 },
      {
        id: "programming-languages",
        name: "Programming Languages",
        count: 283,
      },
    ],
    popularTopics: [
      "JavaScript",
      "React",
      "Python",
      "Node.js",
      "Angular",
      "Vue.js",
      "HTML & CSS",
      "PHP",
      "Django",
      "Flutter",
      "Swift",
      "Unity",
    ],
  };

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 1245,
      students: 12453,
      price: 49.99,
      originalPrice: 99.99,
      image: "/images/pexels-thisisengineering-3862130.jpg",
      subcategory: "Web Development",
      level: "Beginner",
      duration: "10 weeks",
      lastUpdated: "April 2023",
      bestseller: true,
    },
    {
      id: 2,
      title: "JavaScript: The Complete Guide",
      description:
        "Master JavaScript with the most comprehensive course on the market",
      instructor: "Michael Chen",
      rating: 4.7,
      reviews: 876,
      students: 8765,
      price: 59.99,
      originalPrice: 129.99,
      image: "/images/pexels-lum3n-44775-167682.jpg",
      subcategory: "Web Development",
      level: "Intermediate",
      duration: "8 weeks",
      lastUpdated: "May 2023",
      bestseller: false,
    },
    {
      id: 3,
      title: "React & Redux for Beginners",
      description: "Learn React, Redux, and modern JavaScript from scratch",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      reviews: 654,
      students: 6542,
      price: 54.99,
      originalPrice: 109.99,
      image: "/images/pexels-pixabay-301920.jpg",
      subcategory: "Web Development",
      level: "Beginner",
      duration: "6 weeks",
      lastUpdated: "June 2023",
      bestseller: true,
    },
    {
      id: 4,
      title: "Flutter & Dart: Mobile App Development",
      description:
        "Build iOS and Android apps with a single codebase using Flutter",
      instructor: "David Wilson",
      rating: 4.8,
      reviews: 932,
      students: 9321,
      price: 69.99,
      originalPrice: 139.99,
      image: "/images/pexels-emily-ranquist-493228-1205651.jpg",
      subcategory: "Mobile Apps",
      level: "Intermediate",
      duration: "12 weeks",
      lastUpdated: "March 2023",
      bestseller: false,
    },
    {
      id: 5,
      title: "Unity Game Development: Complete Course",
      description: "Learn to create 2D and 3D games with Unity from scratch",
      instructor: "Jessica Lee",
      rating: 4.6,
      reviews: 543,
      students: 5432,
      price: 64.99,
      originalPrice: 129.99,
      image: "/images/pexels-expressivestanley-1454360.jpg",
      subcategory: "Game Development",
      level: "Beginner",
      duration: "14 weeks",
      lastUpdated: "July 2023",
      bestseller: false,
    },
    {
      id: 6,
      title: "SQL Masterclass: Database Development",
      description:
        "Learn SQL from beginner to advanced with practical exercises",
      instructor: "Robert Zhang",
      rating: 4.7,
      reviews: 765,
      students: 7654,
      price: 44.99,
      originalPrice: 89.99,
      image: "/images/pexels-137666-710743.jpg",
      subcategory: "Databases",
      level: "All Levels",
      duration: "8 weeks",
      lastUpdated: "February 2023",
      bestseller: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/categories">
              Categories
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/categories/${category.id}`}>
              {category.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" asChild>
            <Link href="/categories">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{category.name} Courses</h1>
        </div>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          {category.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="px-3 py-1">
            {category.courseCount.toLocaleString()} courses
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            Updated July 2023
          </Badge>
        </div>
      </div>

      {/* Subcategories */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Browse Subcategories</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {category.subcategories.map((subcategory) => (
            <Card
              key={subcategory.id}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{subcategory.name}</CardTitle>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between"
                  asChild
                >
                  <Link
                    href={`/courses`}
                  >
                    <span>{subcategory.count} courses</span>
                    <span>→</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Topics */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Popular Topics</h2>
        <div className="flex flex-wrap gap-2">
          {category.popularTopics.map((topic) => (
            <Badge key={topic} variant="outline" className="px-3 py-1 text-sm">
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={`Search ${category.name.toLowerCase()} courses...`}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="popular">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filter Courses</SheetTitle>
                <SheetDescription>
                  Narrow down courses based on your preferences
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                {/* Filter options would go here */}
                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Course Grid */}
      <Tabs defaultValue="grid" className="mb-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {courses.length} results
          </div>
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.subcategory}</Badge>
                    {course.bestseller && (
                      <Badge variant="secondary">Bestseller</Badge>
                    )}
                  </div>
                  <CardTitle className="line-clamp-1 mt-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
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
                              i < Math.floor(course.rating)
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                    </div>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({course.reviews})
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">${course.price}</span>
                    {course.originalPrice && (
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline">{course.subcategory}</Badge>
                      <Badge variant="secondary">{course.level}</Badge>
                      {course.bestseller && (
                        <Badge variant="default">Bestseller</Badge>
                      )}
                    </div>
                    <h3 className="mb-1 text-xl font-bold">{course.title}</h3>
                    <p className="mb-4 text-muted-foreground">
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
                    <div className="mt-2 flex items-center gap-1">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(course.rating)
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                      </div>
                      <span className="text-sm font-medium">
                        {course.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({course.reviews})
                      </span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <span>Updated {course.lastUpdated}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div>
                          <span className="text-lg font-bold">
                            ${course.price}
                          </span>
                          {course.originalPrice && (
                            <span className="ml-2 text-sm text-muted-foreground line-through">
                              ${course.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button>View Course</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-1">
        <Button variant="outline" size="icon" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          1
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          2
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          3
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          4
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          5
        </Button>
        <Button variant="outline" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Button>
      </div>

      {/* Related Categories */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Related Categories</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {["Design", "Data Science", "Business", "Marketing"].map(
            (relatedCategory) => (
              <Card
                key={relatedCategory}
                className="transition-all duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{relatedCategory}</CardTitle>
                  <CardDescription>Explore related courses</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href={`/courses/categories/${relatedCategory
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Browse Courses
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}
