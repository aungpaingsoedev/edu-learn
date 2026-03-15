"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, Search, SlidersHorizontal, Star } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function AllCourses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern websites",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 1245,
      students: 12453,
      price: 49.99,
      originalPrice: 99.99,
      image: "/images/pexels-olia-danilevich-5088022.jpg",
      category: "Development",
      level: "Beginner",
      duration: "10 weeks",
      lastUpdated: "April 2023",
    },
    {
      id: 2,
      title: "Data Science Essentials",
      description: "Master data analysis, visualization, and machine learning",
      instructor: "Michael Chen",
      rating: 4.7,
      reviews: 876,
      students: 8765,
      price: 59.99,
      originalPrice: 129.99,
      image: "/images/pexels-zhuhehuai-716276.jpg",
      category: "Data Science",
      level: "Intermediate",
      duration: "12 weeks",
      lastUpdated: "May 2023",
    },
    {
      id: 3,
      title: "UX Design Principles",
      description: "Create user-centered designs that solve real problems",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      reviews: 654,
      students: 6542,
      price: 54.99,
      originalPrice: 109.99,
      image: "/images/pexels-pixabay-301920.jpg",
      category: "Design",
      level: "Beginner",
      duration: "8 weeks",
      lastUpdated: "June 2023",
    },
    {
      id: 4,
      title: "Advanced JavaScript Programming",
      description:
        "Master modern JavaScript with advanced concepts and patterns",
      instructor: "David Wilson",
      rating: 4.8,
      reviews: 932,
      students: 9321,
      price: 69.99,
      originalPrice: 139.99,
      image: "/images/pexels-pragyanbezbo-1720188.jpg",
      category: "Development",
      level: "Advanced",
      duration: "10 weeks",
      lastUpdated: "March 2023",
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps with React Native",
      instructor: "Jessica Lee",
      rating: 4.6,
      reviews: 543,
      students: 5432,
      price: 64.99,
      originalPrice: 129.99,
      image: "/images/pexels-thisisengineering-3862130.jpg",
      category: "Development",
      level: "Intermediate",
      duration: "12 weeks",
      lastUpdated: "July 2023",
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      description:
        "Learn the basics of machine learning algorithms and applications",
      instructor: "Robert Zhang",
      rating: 4.7,
      reviews: 765,
      students: 7654,
      price: 74.99,
      originalPrice: 149.99,
      image: "/images/pexels-zhuhehuai-716276.jpg",
      category: "Data Science",
      level: "Intermediate",
      duration: "14 weeks",
      lastUpdated: "February 2023",
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "development", label: "Development" },
    { id: "data-science", label: "Data Science" },
    { id: "design", label: "Design" },
    { id: "business", label: "Business" },
    { id: "marketing", label: "Marketing" },
  ];

  // Levels for filtering
  const levels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Explore Courses</h1>
        <p className="text-muted-foreground">
          Discover our wide range of courses to enhance your skills
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for courses..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="lowest">Lowest Price</SelectItem>
              <SelectItem value="highest">Highest Price</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4" />
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
                <div>
                  <h3 className="mb-4 text-sm font-medium">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`mobile-${category.id}`} />
                        <label
                          htmlFor={`mobile-${category.id}`}
                          className="text-sm"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-medium">Level</h3>
                  <div className="space-y-3">
                    {levels.map((level) => (
                      <div
                        key={level.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`mobile-${level.id}`} />
                        <label
                          htmlFor={`mobile-${level.id}`}
                          className="text-sm"
                        >
                          {level.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-medium">Price Range</h3>
                  <Slider
                    defaultValue={[0, 100]}
                    max={200}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                  <div className="flex items-center justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Desktop Filters Sidebar */}
        <div className="hidden md:col-span-3 md:block">
          <div className="sticky top-6 space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Filters</h3>
              <div className="space-y-4">
                <Accordion
                  type="multiple"
                  defaultValue={["categories", "level", "price"]}
                >
                  <AccordionItem value="categories">
                    <AccordionTrigger>Categories</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {categories.map((category) => (
                          <div
                            key={category.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={category.id} />
                            <label htmlFor={category.id} className="text-sm">
                              {category.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="level">
                    <AccordionTrigger>Level</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {levels.map((level) => (
                          <div
                            key={level.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={level.id} />
                            <label htmlFor={level.id} className="text-sm">
                              {level.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="price">
                    <AccordionTrigger>Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <Slider
                          defaultValue={[0, 100]}
                          max={200}
                          step={1}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="py-4"
                        />
                        <div className="flex items-center justify-between">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ratings">
                    <AccordionTrigger>Ratings</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {[4, 3, 2, 1].map((rating) => (
                          <div
                            key={rating}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={`rating-${rating}`} />
                            <label
                              htmlFor={`rating-${rating}`}
                              className="flex items-center text-sm"
                            >
                              {Array(rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 fill-primary text-primary"
                                  />
                                ))}
                              {Array(5 - rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 text-muted-foreground"
                                  />
                                ))}
                              <span className="ml-1">& up</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Button className="mt-6 w-full">Apply Filters</Button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="md:col-span-9">
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

            <TabsContent value="grid" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <Link key={course.id} href={`/courses/${course.title}`}>
                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden relative">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{course.category}</Badge>
                          <Badge variant="secondary">{course.level}</Badge>
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
                          <span className="text-sm font-medium">
                            {course.rating}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({course.reviews})
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">
                            ${course.price}
                          </span>
                          {course.originalPrice && (
                            <span className="ml-2 text-sm text-muted-foreground line-through">
                              ${course.originalPrice}
                            </span>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-0">
              <div className="space-y-4">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative md:w-1/3 aspect-video md:aspect-auto md:min-h-[200px]">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-2 flex items-center gap-2">
                          <Badge variant="outline">{course.category}</Badge>
                          <Badge variant="secondary">{course.level}</Badge>
                        </div>
                        <h3 className="mb-1 text-xl font-bold">
                          {course.title}
                        </h3>
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
        </div>
      </div>
    </div>
  );
}
