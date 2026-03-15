import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  LayoutGrid,
  MessageSquare,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern websites",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12453,
      price: "$49.99",
      image: "/images/pexels-abby-chung-371167-1106468.jpg",
      category: "Development",
    },
    {
      id: 2,
      title: "Data Science Essentials",
      description: "Master data analysis, visualization, and machine learning",
      instructor: "Michael Chen",
      rating: 4.7,
      students: 8765,
      price: "$59.99",
      image: "/images/pexels-buro-millennial-636760-1438081.jpg",
      category: "Data Science",
    },
    {
      id: 3,
      title: "UX Design Principles",
      description: "Create user-centered designs that solve real problems",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      students: 6542,
      price: "$54.99",
      image: "/images/pexels-expressivestanley-1454360.jpg",
      category: "Design",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Software Developer",
      content:
        "EduLearn completely transformed my career. The web development courses were comprehensive and practical. I landed a job within 3 months of completing my first course!",
      avatar: "/images/pexels-iqwan-alif-493640-1206101.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Data Analyst",
      content:
        "The data science track provided me with all the skills I needed to transition into analytics. The instructors are industry experts and the projects are based on real-world scenarios.",
      avatar: "/images/pexels-julia-m-cameron-4145153.jpg",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "UX Designer",
      content:
        "As someone with no design background, I was amazed at how quickly I picked up UX principles through EduLearn's courses. The community support is incredible too!",
      avatar: "/images/pexels-lum3n-44775-167682.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted py-20 text-center">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 px-3 py-1 text-sm">
            Trusted by over 50,000 students
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Unlock Your Potential with{" "}
            <span className="text-primary">EduLearn</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Access high-quality courses taught by industry experts and transform
            your skills at your own pace.
          </p>
          <div className="flex items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/courses">
              <Button variant="outline" size="lg">
                Explore Courses
              </Button>
            </Link>
          </div>
          <div className="mt-12 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary/10 w-[200px] h-[200px] rounded-full blur-3xl"></div>
            <Image
              src="/images/pexels-137666-710743.jpg"
              alt="EduLearn Platform"
              width={1200}
              height={600}
              className="mx-auto rounded-lg shadow-lg relative z-10 md:h-[900px] object-cover w-full"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold md:text-4xl">500+</div>
              <p className="text-muted-foreground">Courses</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold md:text-4xl">50K+</div>
              <p className="text-muted-foreground">Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold md:text-4xl">200+</div>
              <p className="text-muted-foreground">Instructors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold md:text-4xl">4.8</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
              Featured Courses
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our most popular courses and start your learning journey
              today
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All Categories</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
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
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{course.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">
                          {course.rating}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {course.instructor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">{course.instructor}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="font-bold">{course.price}</div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/courses">
              <Button variant="outline" size="lg">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
              Why Choose EduLearn
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform is designed to provide the best learning experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from industry professionals with years of real-world
                  experience in their fields.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <LayoutGrid className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Diverse Course Catalog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore hundreds of courses across development, design,
                  business, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Self-Paced Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Study at your own pace with lifetime access to course
                  materials and updates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Practical Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apply your knowledge with hands-on projects that build your
                  portfolio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with fellow learners and instructors in our active
                  community forums.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn recognized certificates to showcase your skills to
                  employers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
              What Our Students Say
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Thousands of students have transformed their careers with EduLearn
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
            Join thousands of students already learning on EduLearn. Start your
            journey today!
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            Sign Up Now <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
