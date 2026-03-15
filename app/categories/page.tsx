"use client";

import Link from "next/link";
import {
  Code,
  BarChart,
  Palette,
  Briefcase,
  Megaphone,
  Camera,
  Music,
  HeartPulse,
  GraduationCap,
  Languages,
  BookOpen,
  Lightbulb,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Categories() {
  // Sample categories data
  const categories = [
    {
      id: "development",
      name: "Development",
      description: "Web, Mobile, Game Development & more",
      icon: <Code className="h-8 w-8" />,
      color: "bg-blue-500/10 text-blue-500",
      courseCount: 1245,
      popular: true,
      subcategories: [
        "Web Development",
        "Mobile Apps",
        "Game Development",
        "Databases",
        "Programming Languages",
      ],
    },
    {
      id: "data-science",
      name: "Data Science",
      description: "Machine Learning, AI & Analytics",
      icon: <BarChart className="h-8 w-8" />,
      color: "bg-purple-500/10 text-purple-500",
      courseCount: 842,
      popular: true,
      subcategories: [
        "Machine Learning",
        "Data Analysis",
        "Python",
        "Deep Learning",
        "Statistics",
      ],
    },
    {
      id: "design",
      name: "Design",
      description: "UI/UX, Graphic Design & Illustration",
      icon: <Palette className="h-8 w-8" />,
      color: "bg-pink-500/10 text-pink-500",
      courseCount: 753,
      popular: true,
      subcategories: [
        "UI/UX Design",
        "Graphic Design",
        "3D Modeling",
        "Animation",
        "Drawing",
      ],
    },
    {
      id: "business",
      name: "Business",
      description: "Management, Marketing & Finance",
      icon: <Briefcase className="h-8 w-8" />,
      color: "bg-green-500/10 text-green-500",
      courseCount: 921,
      popular: true,
      subcategories: [
        "Entrepreneurship",
        "Management",
        "Finance",
        "Strategy",
        "Operations",
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "Digital Marketing, SEO & Social Media",
      icon: <Megaphone className="h-8 w-8" />,
      color: "bg-orange-500/10 text-orange-500",
      courseCount: 634,
      popular: true,
      subcategories: [
        "Digital Marketing",
        "Social Media",
        "SEO",
        "Content Marketing",
        "Branding",
      ],
    },
    {
      id: "photography",
      name: "Photography",
      description: "Digital Photography & Video",
      icon: <Camera className="h-8 w-8" />,
      color: "bg-indigo-500/10 text-indigo-500",
      courseCount: 432,
      popular: false,
      subcategories: [
        "Digital Photography",
        "Portrait",
        "Landscape",
        "Commercial",
        "Video Production",
      ],
    },
    {
      id: "music",
      name: "Music",
      description: "Instruments, Production & Theory",
      icon: <Music className="h-8 w-8" />,
      color: "bg-red-500/10 text-red-500",
      courseCount: 321,
      popular: false,
      subcategories: [
        "Instruments",
        "Music Production",
        "Music Theory",
        "Vocals",
        "Composition",
      ],
    },
    {
      id: "health",
      name: "Health & Fitness",
      description: "Wellness, Nutrition & Fitness",
      icon: <HeartPulse className="h-8 w-8" />,
      color: "bg-emerald-500/10 text-emerald-500",
      courseCount: 512,
      popular: false,
      subcategories: [
        "Fitness",
        "Nutrition",
        "Mental Health",
        "Yoga",
        "Meditation",
      ],
    },
    {
      id: "academics",
      name: "Academics",
      description: "Math, Science & Humanities",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "bg-yellow-500/10 text-yellow-500",
      courseCount: 687,
      popular: false,
      subcategories: [
        "Mathematics",
        "Science",
        "History",
        "Literature",
        "Engineering",
      ],
    },
    {
      id: "languages",
      name: "Languages",
      description: "Learn English, Spanish & more",
      icon: <Languages className="h-8 w-8" />,
      color: "bg-cyan-500/10 text-cyan-500",
      courseCount: 423,
      popular: false,
      subcategories: ["English", "Spanish", "Chinese", "French", "Japanese"],
    },
    {
      id: "teaching",
      name: "Teaching & Academics",
      description: "Teaching Methods & Educational Theory",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-amber-500/10 text-amber-500",
      courseCount: 345,
      popular: false,
      subcategories: [
        "Teaching Methods",
        "Educational Theory",
        "E-Learning",
        "Curriculum Development",
        "Test Prep",
      ],
    },
    {
      id: "personal-development",
      name: "Personal Development",
      description: "Productivity, Leadership & Skills",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-lime-500/10 text-lime-500",
      courseCount: 789,
      popular: false,
      subcategories: [
        "Productivity",
        "Leadership",
        "Communication",
        "Personal Finance",
        "Career Development",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">
          Course Categories
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Browse our diverse range of courses across multiple disciplines to
          find the perfect learning path for you
        </p>
      </div>

      <Tabs defaultValue="grid" className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1">
              {categories.length} Categories
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              {categories
                .reduce((acc, category) => acc + category.courseCount, 0)
                .toLocaleString()}{" "}
              Courses
            </Badge>
          </div>
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
        </div>

        {/* Grid View */}
        <TabsContent value="grid" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`rounded-lg p-3 ${category.color}`}>
                      {category.icon}
                    </div>
                    {category.popular && (
                      <Badge variant="secondary">Popular</Badge>
                    )}
                  </div>
                  <CardTitle className="mt-3">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 3).map((subcategory) => (
                      <Badge
                        key={subcategory}
                        variant="outline"
                        className="font-normal"
                      >
                        {subcategory}
                      </Badge>
                    ))}
                    {category.subcategories.length > 3 && (
                      <Badge variant="outline" className="font-normal">
                        +{category.subcategories.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
                  <div className="text-sm text-muted-foreground">
                    {category.courseCount.toLocaleString()} courses
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/categories/${category.id}`}>Explore</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* List View */}
        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`flex items-center justify-center p-6 md:w-48 ${category.color}`}
                  >
                    {category.icon}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <CardTitle>{category.name}</CardTitle>
                      {category.popular && (
                        <Badge variant="secondary">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="mb-4">
                      {category.description}
                    </CardDescription>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {category.subcategories.map((subcategory) => (
                        <Badge
                          key={subcategory}
                          variant="outline"
                          className="font-normal"
                        >
                          {subcategory}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {category.courseCount.toLocaleString()} courses
                      </div>
                      <Button asChild>
                        <Link href={`/courses/categories/${category.id}`}>
                          Browse Category
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Featured Categories Section */}
      <div className="mt-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Popular Categories</h2>
          <p className="text-muted-foreground">
            Our most enrolled and highly-rated course categories
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories
            .filter((cat) => cat.popular)
            .map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className={`rounded-lg p-3 ${category.color}`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle>{category.name}</CardTitle>
                      <CardDescription>
                        {category.courseCount.toLocaleString()} courses
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.subcategories.slice(0, 4).map((subcategory) => (
                      <li key={subcategory} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <Link
                          href={`/courses/categories/${
                            category.id
                          }/${subcategory.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm hover:text-primary hover:underline"
                        >
                          {subcategory}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-3">
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href={`/courses/categories/${category.id}`}>
                      View All {category.name} Courses
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      {/* Category Exploration Banner */}
      <div className="mt-16 rounded-xl bg-primary p-8 text-primary-foreground">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Not sure where to start?</h2>
            <p className="mt-2 max-w-lg">
              Take our quick assessment to get personalized category and course
              recommendations based on your goals and experience level.
            </p>
          </div>
          <Button variant="secondary" size="lg">
            Find Your Path
          </Button>
        </div>
      </div>
    </div>
  );
}
