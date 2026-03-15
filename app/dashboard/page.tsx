"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  PlayCircle,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

const DashboardActivityChart = dynamic(
  () =>
    import("./activity-chart").then((m) => m.DashboardActivityChart),
  { ssr: false, loading: () => <div className="h-[240px] animate-pulse rounded bg-muted" /> }
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "Sarah Johnson",
      progress: 68,
      image: "/placeholder.svg?height=100&width=180",
      nextLesson: "CSS Flexbox Layout",
      dueDate: "Tomorrow",
    },
    {
      id: 2,
      title: "Data Science Essentials",
      instructor: "Michael Chen",
      progress: 42,
      image: "/placeholder.svg?height=100&width=180",
      nextLesson: "Statistical Analysis with Python",
      dueDate: "In 3 days",
    },
    {
      id: 3,
      title: "UX Design Principles",
      instructor: "Emma Rodriguez",
      progress: 89,
      image: "/placeholder.svg?height=100&width=180",
      nextLesson: "User Testing Methods",
      dueDate: "Today",
    },
  ];

  // Sample upcoming deadlines
  const deadlines = [
    {
      id: 1,
      title: "Final Project Submission",
      course: "Web Development Fundamentals",
      dueDate: "Today, 11:59 PM",
      type: "Assignment",
    },
    {
      id: 2,
      title: "Quiz: Statistical Methods",
      course: "Data Science Essentials",
      dueDate: "Tomorrow, 3:00 PM",
      type: "Quiz",
    },
    {
      id: 3,
      title: "Peer Review Deadline",
      course: "UX Design Principles",
      dueDate: "May 15, 11:59 PM",
      type: "Review",
    },
  ];

  // Sample announcements
  const announcements = [
    {
      id: 1,
      title: "Platform Maintenance",
      content:
        "The platform will be down for maintenance on Sunday from 2 AM to 4 AM EST.",
      date: "2 hours ago",
      author: "System Admin",
    },
    {
      id: 2,
      title: "New Course Available",
      content:
        "Check out our new course on Mobile App Development with React Native!",
      date: "Yesterday",
      author: "Course Team",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Welcome Section */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">
            Welcome back, John!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your learning journey
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Calendar className="h-4 w-4" />
            May 12, 2023
          </Button>
          <Button size="sm" className="gap-1">
            <GraduationCap className="h-4 w-4" />
            My Courses
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Courses In Progress
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 courses almost complete
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Courses
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Hours This Week
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16.5</div>
            <p className="text-xs text-muted-foreground">+3.5 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 new badges earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <Tabs
        defaultValue="overview"
        className="mt-6"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="overview">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline-block">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="courses">
            <BookOpen className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline-block">My Courses</span>
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <Calendar className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline-block">Calendar</span>
          </TabsTrigger>
          <TabsTrigger value="performance">
            <BarChart3 className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline-block">Performance</span>
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Current Courses */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
                <CardDescription>Your active learning progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {courses.map((course) => (
                  <div key={course.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={80}
                          height={48}
                          className="h-12 w-20 rounded-md object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{course.title}</h3>
                          <p className="text-xs text-muted-foreground">
                            {course.instructor}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <PlayCircle className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={course.progress} className="h-2" />
                      <span className="text-xs font-medium">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>Next: {course.nextLesson}</span>
                      <Badge variant="outline" className="text-xs">
                        Due {course.dueDate}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Courses
                </Button>
              </CardFooter>
            </Card>

            {/* Weekly Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Your learning hours this week</CardDescription>
              </CardHeader>
              <CardContent>
                <DashboardActivityChart />
                <div className="mt-2 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span>Study Hours</span>
                  </div>
                  <span className="font-medium">16.5 hrs total</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <Badge className="px-2 py-1">{deadlines.length}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {deadlines.map((deadline) => (
                  <div key={deadline.id} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      {deadline.type === "Assignment" ? (
                        <FileText className="h-5 w-5 text-primary" />
                      ) : deadline.type === "Quiz" ? (
                        <MessageSquare className="h-5 w-5 text-primary" />
                      ) : (
                        <Users className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium leading-none">
                        {deadline.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {deadline.course}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            deadline.dueDate.includes("Today")
                              ? "destructive"
                              : "outline"
                          }
                          className="text-xs"
                        >
                          {deadline.dueDate}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View All Deadlines
                </Button>
              </CardFooter>
            </Card>

            {/* Announcements */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Announcements</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{announcement.title}</h4>
                      <span className="text-xs text-muted-foreground">
                        {announcement.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {announcement.content}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted by: {announcement.author}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View All Announcements
                </Button>
              </CardFooter>
            </Card>

            {/* Achievements & Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Consistent Learner</h4>
                    <p className="text-xs text-muted-foreground">
                      Completed lessons 5 days in a row
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Perfect Score</h4>
                    <p className="text-xs text-muted-foreground">
                      Achieved 100% on a quiz
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="mb-2 font-medium">Recommended For You</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt="Course thumbnail"
                        width={60}
                        height={40}
                        className="h-10 w-15 rounded-md object-cover"
                      />
                      <div>
                        <h5 className="text-sm font-medium">
                          Advanced JavaScript
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Based on your interests
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt="Course thumbnail"
                        width={60}
                        height={40}
                        className="h-10 w-15 rounded-md object-cover"
                      />
                      <div>
                        <h5 className="text-sm font-medium">
                          UI/UX Fundamentals
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Popular in your field
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Other tabs would be implemented here */}
        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>My Courses</CardTitle>
              <CardDescription>
                Manage all your enrolled courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Your courses content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>
                View your schedule and upcoming events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Your calendar content would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                Track your learning progress and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Your performance analytics would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
