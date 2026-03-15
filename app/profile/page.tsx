"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Edit,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Settings,
  Share2,
  Star,
  User,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");

  // User profile data
  const user = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate learner and software developer with interests in web development, data science, and UX design.",
    avatar: "/images/ian-dooley-C6BrEIucDDU-unsplash.jpg",
    coverImage: "/images/pexels-lum3n-44775-167682.jpg",
    joinDate: "January 2022",
    socialLinks: {
      twitter: "twitter.com/johndoe",
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
    },
  };

  // Learning stats
  const learningStats = {
    coursesCompleted: 7,
    coursesInProgress: 3,
    totalHours: 142,
    certificatesEarned: 5,
    averageRating: 4.8,
    streak: 15,
  };

  // Certificates
  const certificates = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      issueDate: "April 15, 2023",
      image: "/placeholder.svg?height=100&width=180",
      credential: "CERT-12345-WD",
    },
    {
      id: 2,
      title: "Data Science Essentials",
      issueDate: "March 22, 2023",
      image: "/placeholder.svg?height=100&width=180",
      credential: "CERT-67890-DS",
    },
    {
      id: 3,
      title: "UX Design Principles",
      issueDate: "February 10, 2023",
      image: "/placeholder.svg?height=100&width=180",
      credential: "CERT-24680-UX",
    },
  ];

  // Achievements
  const achievements = [
    {
      id: 1,
      title: "Fast Learner",
      description: "Completed 5 courses in 30 days",
      icon: <Clock className="h-6 w-6 text-primary" />,
      date: "March 15, 2023",
    },
    {
      id: 2,
      title: "Perfect Score",
      description: "Achieved 100% on 3 course assessments",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      date: "February 28, 2023",
    },
    {
      id: 3,
      title: "Consistent Learner",
      description: "Maintained a 15-day learning streak",
      icon: <Calendar className="h-6 w-6 text-primary" />,
      date: "April 5, 2023",
    },
    {
      id: 4,
      title: "Helpful Reviewer",
      description: "Wrote 10 course reviews",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      date: "January 20, 2023",
    },
  ];

  // Recent activity
  const recentActivity = [
    {
      id: 1,
      type: "course-progress",
      title: "Completed lesson: CSS Flexbox Layout",
      course: "Web Development Fundamentals",
      date: "2 hours ago",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: 2,
      type: "certificate",
      title: "Earned certificate",
      course: "Data Science Essentials",
      date: "Yesterday",
      icon: <Award className="h-5 w-5 text-primary" />,
    },
    {
      id: 3,
      type: "course-started",
      title: "Started new course",
      course: "UX Design Principles",
      date: "3 days ago",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
    },
    {
      id: 4,
      type: "assessment",
      title: "Passed assessment: Statistical Analysis",
      course: "Data Science Essentials",
      date: "1 week ago",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="relative mb-8">
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-muted">
          <Image
            src={user.coverImage || "/placeholder.svg"}
            alt="Cover"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute -bottom-16 left-8">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src={user.avatar} alt={user.name} className=" object-cover " />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-end p-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mb-8 mt-16 md:flex md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">@{user.username}</p>
          <p className="mt-2 max-w-2xl">{user.bio}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Member since {user.joinDate}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2 md:mt-0">
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share Profile
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>Notification Preferences</DropdownMenuItem>
              <DropdownMenuItem>Privacy Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Help Center</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Learning Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Courses Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {learningStats.coursesCompleted}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {learningStats.coursesInProgress}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Learning Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{learningStats.totalHours}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {learningStats.certificatesEarned}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1">
              <div className="text-2xl font-bold">
                {learningStats.averageRating}
              </div>
              <Star className="h-4 w-4 fill-primary text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Current Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {learningStats.streak} days
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs
        defaultValue="overview"
        className="space-y-8"
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Recent Certificates */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Certificates</CardTitle>
                  {activeTab === "overview" && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href="#"
                        onClick={() => setActiveTab("certificates")}
                      >
                        View All
                      </Link>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certificates.slice(0, 2).map((certificate) => (
                    <div
                      key={certificate.id}
                      className="flex items-center gap-4"
                    >
                      <div className="relative h-16 w-28 overflow-hidden rounded-md">
                        <Image
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.title}
                          fill
                          className="object-cover"
                          sizes="112px"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{certificate.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          Issued on {certificate.issueDate}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Credential: {certificate.credential}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Achievements</CardTitle>
                  {activeTab === "overview" && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href="#"
                        onClick={() => setActiveTab("achievements")}
                      >
                        View All
                      </Link>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.slice(0, 2).map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Earned on {achievement.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activity</CardTitle>
                {activeTab === "overview" && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#" onClick={() => setActiveTab("activity")}>
                      View All
                    </Link>
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      {activity.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium leading-none">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {activity.course}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Certificates Tab */}
        <TabsContent value="certificates">
          <Card>
            <CardHeader>
              <CardTitle>My Certificates</CardTitle>
              <CardDescription>
                Certificates earned from completed courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((certificate) => (
                  <Card key={certificate.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden relative">
                      <Image
                        src={certificate.image || "/placeholder.svg"}
                        alt={certificate.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {certificate.title}
                      </CardTitle>
                      <CardDescription>
                        Issued on {certificate.issueDate}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        <span className="font-medium">Credential ID:</span>{" "}
                        {certificate.credential}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
                      <Button variant="outline" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                      <Button className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>My Achievements</CardTitle>
              <CardDescription>
                Badges and achievements earned through your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        {achievement.icon}
                      </div>
                      <CardTitle className="mt-2 text-lg">
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Earned on {achievement.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Learning Activity</CardTitle>
              <CardDescription>
                Your recent learning activities and progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Activity Timeline */}
                <div className="relative space-y-8 before:absolute before:inset-0 before:left-9 before:ml-px before:h-full before:w-px before:bg-muted">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex gap-4">
                      <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        {activity.icon}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{activity.title}</h4>
                          <span className="text-xs text-muted-foreground">
                            {activity.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {activity.course}
                        </p>
                        {activity.type === "course-progress" && (
                          <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-primary"
                          >
                            Continue Learning
                          </Button>
                        )}
                        {activity.type === "certificate" && (
                          <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-primary"
                          >
                            View Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
