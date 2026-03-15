"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Info,
  LayoutList,
  MessageSquare,
  Play,
  PlayCircle,
  Share2,
  Star,
  Users,
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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CourseDetail() {
  const [isEnrolled, setIsEnrolled] = useState(true);

  // Course data
  const course = {
    id: 1,
    title: "Web Development Fundamentals",
    description:
      "Learn HTML, CSS, and JavaScript to build modern websites. This comprehensive course covers everything from basic markup to advanced interactive features, responsive design, and modern web development practices.",
    instructor: {
      name: "Sarah Johnson",
      title: "Senior Web Developer",
      bio: "Sarah has over 10 years of experience in web development and has worked with companies like Google and Facebook. She specializes in frontend technologies and is passionate about teaching.",
      avatar: "/images/pexels-137666-710743.jpg",
    },
    rating: 4.8,
    reviews: 1245,
    students: 12453,
    price: 49.99,
    originalPrice: 99.99,
    image: "/images/pexels-abby-chung-371167-1106468.jpg",
    category: "Development",
    level: "Beginner",
    duration: "10 weeks",
    lastUpdated: "April 2023",
    language: "English",
    certificate: true,
    progress: 68,
    features: [
      "40+ hours of video content",
      "120+ coding exercises",
      "10 real-world projects",
      "Lifetime access",
      "Mobile and TV access",
      "Certificate of completion",
    ],
    requirements: [
      "No prior programming experience required",
      "Basic computer skills",
      "A computer with internet access",
    ],
  };

  // Course curriculum
  const curriculum = [
    {
      id: 1,
      title: "Introduction to Web Development",
      lessons: [
        {
          id: 1,
          title: "Course Overview",
          duration: "10 min",
          type: "video",
          completed: true,
        },
        {
          id: 2,
          title: "Setting Up Your Development Environment",
          duration: "15 min",
          type: "video",
          completed: true,
        },
        {
          id: 3,
          title: "Understanding HTML Basics",
          duration: "25 min",
          type: "video",
          completed: true,
        },
        {
          id: 4,
          title: "HTML Structure and Elements",
          duration: "30 min",
          type: "video",
          completed: true,
        },
        {
          id: 5,
          title: "Introduction to HTML Project",
          duration: "45 min",
          type: "project",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      lessons: [
        {
          id: 6,
          title: "Introduction to CSS",
          duration: "20 min",
          type: "video",
          completed: true,
        },
        {
          id: 7,
          title: "CSS Selectors and Properties",
          duration: "30 min",
          type: "video",
          completed: true,
        },
        {
          id: 8,
          title: "Box Model and Layout",
          duration: "35 min",
          type: "video",
          completed: true,
        },
        {
          id: 9,
          title: "CSS Flexbox Layout",
          duration: "45 min",
          type: "video",
          completed: false,
        },
        {
          id: 10,
          title: "CSS Grid Layout",
          duration: "40 min",
          type: "video",
          completed: false,
        },
        {
          id: 11,
          title: "Styling Your First Webpage",
          duration: "60 min",
          type: "project",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "JavaScript Basics",
      lessons: [
        {
          id: 12,
          title: "Introduction to JavaScript",
          duration: "25 min",
          type: "video",
          completed: false,
        },
        {
          id: 13,
          title: "Variables and Data Types",
          duration: "30 min",
          type: "video",
          completed: false,
        },
        {
          id: 14,
          title: "Functions and Control Flow",
          duration: "40 min",
          type: "video",
          completed: false,
        },
        {
          id: 15,
          title: "DOM Manipulation",
          duration: "45 min",
          type: "video",
          completed: false,
        },
        {
          id: 16,
          title: "Event Handling",
          duration: "35 min",
          type: "video",
          completed: false,
        },
        {
          id: 17,
          title: "Building an Interactive Web App",
          duration: "90 min",
          type: "project",
          completed: false,
        },
      ],
    },
    {
      id: 4,
      title: "Responsive Web Design",
      lessons: [
        {
          id: 18,
          title: "Mobile-First Design Principles",
          duration: "30 min",
          type: "video",
          completed: false,
        },
        {
          id: 19,
          title: "Media Queries",
          duration: "25 min",
          type: "video",
          completed: false,
        },
        {
          id: 20,
          title: "Responsive Images and Typography",
          duration: "35 min",
          type: "video",
          completed: false,
        },
        {
          id: 21,
          title: "Building a Responsive Website",
          duration: "75 min",
          type: "project",
          completed: false,
        },
      ],
    },
  ];

  // Reviews
  const reviews = [
    {
      id: 1,
      user: {
        name: "Alex Thompson",
        avatar: "/images/pexels-pragyanbezbo-1720188.jpg",
      },
      rating: 5,
      date: "March 15, 2023",
      content:
        "This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand, and the projects helped me apply what I learned. I went from knowing nothing about web development to building my own portfolio website.",
    },
    {
      id: 2,
      user: {
        name: "Priya Sharma",
        avatar: "/images/pexels-emily-ranquist-493228-1205651.jpg",
      },
      rating: 4,
      date: "February 28, 2023",
      content:
        "Great course for beginners. The content is well-structured and the instructor is knowledgeable. I would have liked more advanced JavaScript examples, but overall it's a solid introduction to web development.",
    },
    {
      id: 3,
      user: {
        name: "Marcus Johnson",
        avatar: "/images/pexels-yogendras31-731510.jpg",
      },
      rating: 5,
      date: "April 5, 2023",
      content:
        "I've tried several web development courses, and this is by far the best one for beginners. The projects are practical and the instructor's teaching style is engaging. Highly recommended!",
    },
  ];

  // Calculate progress stats
  const totalLessons = curriculum.reduce(
    (acc, section) => acc + section.lessons.length,
    0
  );
  const completedLessons = curriculum.reduce(
    (acc, section) =>
      acc + section.lessons.filter((lesson) => lesson.completed).length,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="mb-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="outline">{course.category}</Badge>
            <Badge variant="secondary">{course.level}</Badge>
            {course.certificate && (
              <Badge variant="outline" className="gap-1">
                <Award className="h-3 w-3" />
                Certificate
              </Badge>
            )}
          </div>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            {course.title}
          </h1>
          <p className="mb-4 text-muted-foreground">{course.description}</p>
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
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
              <span className="font-medium">{course.rating}</span>
              <span className="text-muted-foreground">
                ({course.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last updated {course.lastUpdated}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={course.instructor.avatar}
                alt={course.instructor.name}
              />
              <AvatarFallback>
                {course.instructor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{course.instructor.name}</div>
              <div className="text-sm text-muted-foreground">
                {course.instructor.title}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card className="sticky top-6">
            <div className="aspect-video w-full overflow-hidden relative">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {!isEnrolled && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Button size="icon" className="h-16 w-16 rounded-full">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              )}
            </div>
            <CardContent className="p-6">
              {isEnrolled ? (
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">Your Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="mt-1 text-xs text-muted-foreground">
                      {completedLessons} of {totalLessons} lessons completed
                    </div>
                  </div>
                  <Button className="w-full gap-2">
                    <PlayCircle className="h-4 w-4" />
                    Continue Learning
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <LayoutList className="h-4 w-4" />
                    View Course Content
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">${course.price}</div>
                    {course.originalPrice && (
                      <div className="text-lg text-muted-foreground line-through">
                        ${course.originalPrice}
                      </div>
                    )}
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                  <Button variant="outline" className="w-full">
                    Add to Wishlist
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    30-Day Money-Back Guarantee
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-4 border-t bg-muted/50 px-6 py-4">
              <div className="text-sm font-medium">This course includes:</div>
              <ul className="space-y-2 text-sm">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-4">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  {course.language}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Course Content Tabs */}
      <Tabs defaultValue="curriculum" className="space-y-8">
        <TabsList className="w-full justify-start border-b pb-px">
          <TabsTrigger
            value="curriculum"
            className="relative rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary"
          >
            Curriculum
          </TabsTrigger>
          <TabsTrigger
            value="overview"
            className="relative rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="instructor"
            className="relative rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary"
          >
            Instructor
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="relative rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        {/* Curriculum Tab */}
        <TabsContent value="curriculum">
          <Card>
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
              <CardDescription>
                {totalLessons} lessons • {course.duration} • All levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="space-y-4">
                {curriculum.map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={`section-${section.id}`}
                    className="border rounded-lg"
                  >
                    <AccordionTrigger className="px-4 py-2 hover:no-underline">
                      <div className="flex flex-1 items-center justify-between pr-4">
                        <div>
                          <div className="font-medium">{section.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {section.lessons.length} lessons •
                            {Math.round(
                              (section.lessons.reduce(
                                (acc, lesson) =>
                                  acc + Number.parseInt(lesson.duration),
                                0
                              ) /
                                60) *
                                10
                            ) / 10}{" "}
                            hours
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <Badge variant="outline">
                            {
                              section.lessons.filter(
                                (lesson) => lesson.completed
                              ).length
                            }
                            /{section.lessons.length} completed
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-t px-0 py-0">
                      {section.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center justify-between border-b p-4 last:border-b-0 ${
                            lesson.completed ? "bg-muted/30" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border">
                              {lesson.completed ? (
                                <CheckCircle className="h-5 w-5 text-primary" />
                              ) : lesson.type === "video" ? (
                                <Play className="h-4 w-4" />
                              ) : (
                                <FileText className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{lesson.title}</div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                {lesson.type === "video" ? (
                                  <div className="flex items-center gap-1">
                                    <PlayCircle className="h-3 w-3" />
                                    <span>Video</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    <span>Project</span>
                                  </div>
                                )}
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{lesson.duration}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant={
                                    lesson.completed ? "ghost" : "outline"
                                  }
                                  size="sm"
                                  className={lesson.completed ? "gap-1" : ""}
                                >
                                  {lesson.completed ? (
                                    <>
                                      <CheckCircle className="h-4 w-4" />
                                      Completed
                                    </>
                                  ) : (
                                    "Start"
                                  )}
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                {lesson.completed
                                  ? "Mark as incomplete"
                                  : "Start lesson"}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>About This Course</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">Description</h3>
                <p className="text-muted-foreground">{course.description}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">What You'll Learn</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>
                      Build responsive websites using HTML, CSS, and JavaScript
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>
                      Understand web development fundamentals and best practices
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>
                      Create interactive user interfaces with JavaScript
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>
                      Implement modern CSS layouts with Flexbox and Grid
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Deploy websites to production environments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>
                      Optimize websites for performance and accessibility
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">Requirements</h3>
                <ul className="space-y-2">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Instructor Tab */}
        <TabsContent value="instructor">
          <Card>
            <CardHeader>
              <CardTitle>Meet Your Instructor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                  />
                  <AvatarFallback>
                    {course.instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-medium">
                    {course.instructor.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {course.instructor.title}
                  </p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm">4.8 Instructor Rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-sm">2,345 Reviews</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">42,500 Students</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">
                  About the Instructor
                </h3>
                <p className="text-muted-foreground">{course.instructor.bio}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reviews Tab */}
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Student Reviews</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold">{course.rating}</div>
                  <div>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(course.rating)
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Course Rating
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="space-y-2 border-b pb-6 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={review.user.avatar}
                          alt={review.user.name}
                        />
                        <AvatarFallback>
                          {review.user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{review.user.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {review.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.content}</p>
                </div>
              ))}
              <div className="flex justify-center">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Courses */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Related Courses</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((id) => (
            <Card key={id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden relative">
                <Image
                  src="/images/pexels-137666-710743.jpg"
                  alt="Course thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Development</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-xs">4.7</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-1 mt-2 text-base">
                  Advanced CSS Techniques
                </CardTitle>
                <CardDescription className="line-clamp-2 text-xs">
                  Master advanced CSS techniques for modern web development
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between border-t bg-muted/50 p-4">
                <div className="text-sm font-medium">$39.99</div>
                <Button size="sm">View Course</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
