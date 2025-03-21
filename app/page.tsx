"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Code,
  Database,
  Github,
  Layout,
  Linkedin,
  Palette,
  Shield,
  Smartphone,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleDemoClick = () => {
    router.push("/dashboard");
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        onLogout={handleLogout}
        title="Dashboard Project"
        user={{
          name: "Developer",
          email: "dev@example.com",
        }}
      />

      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Dynamic Dashboard with Authentication
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A fully functional dashboard implementation with JWT
              authentication, API integration, and responsive design
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Badge variant="outline" className="px-3 py-1">
                <Layout className="mr-1 h-3 w-3" />
                Next.js
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                <Palette className="mr-1 h-3 w-3" />
                Tailwind CSS
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                <Database className="mr-1 h-3 w-3" />
                Prisma + Neon PostgreSQL
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                <Shield className="mr-1 h-3 w-3" />
                JWT Auth
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                <Code className="mr-1 h-3 w-3" />
                shadcn/ui
              </Badge>
            </div>
          </section>

          {/* Features */}
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="setup">Setup Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication System</CardTitle>
                    <CardDescription>
                      Secure login and protection for routes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Email and password validation
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        JWT token storage in localStorage
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Protected routes with redirects
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        User data stored in PostgreSQL
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dashboard Interface</CardTitle>
                    <CardDescription>
                      Modern, intuitive user experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Header with user info and logout
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Sidebar navigation with links
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Data table with search and filter
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Pagination (5 posts per page)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>API Integration</CardTitle>
                    <CardDescription>
                      Efficient data fetching and state management
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {/* <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Server-side rendering with getServerSideProps
                      </li> */}
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Client-side filtering with React hooks
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Error handling for API failures
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Loading states during data fetching
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>UI/UX Features</CardTitle>
                    <CardDescription>
                      Enhanced visual experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Dark, light, and system theme modes
                      </li>
                      {/* <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Responsive design for all devices
                      </li> */}
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Hover effects and transitions
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        shadcn/ui component library
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                  <CardDescription>
                    Core technologies used in this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Framework & Frontend</h3>
                      <ul className="space-y-1 ml-6 list-disc text-muted-foreground">
                        <li>
                          Next.js (App Router) for server and client-side
                          rendering
                        </li>
                        <li>Tailwind CSS for responsive styling</li>
                        <li>shadcn/ui components for consistent UI elements</li>
                        <li>Framer Motion for smooth animations</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Backend & Database</h3>
                      <ul className="space-y-1 ml-6 list-disc text-muted-foreground">
                        <li>Prisma ORM for database access and management</li>
                        <li>Neon PostgreSQL for storing user information</li>
                        <li>JWT token-based authentication</li>
                        <li>JSONPlaceholder API for demo data</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Code Structure</h3>
                      <ul className="space-y-1 ml-6 list-disc text-muted-foreground">
                        <li>Modular components for reusability</li>
                        <li>Server and client components separation</li>
                        <li>Protected routes with middleware</li>
                        <li>Custom hooks for shared logic</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reusable Components</CardTitle>
                  <CardDescription>
                    Modular components used throughout the application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <div className="font-medium">Header</div>
                      <p className="text-sm text-muted-foreground">
                        Navigation bar with user dropdown and theme toggle
                      </p>
                    </li>
                    <li>
                      <div className="font-medium">Sidebar</div>
                      <p className="text-sm text-muted-foreground">
                        Collapsible navigation with route links
                      </p>
                    </li>
                    <li>
                      <div className="font-medium">DataTable</div>
                      <p className="text-sm text-muted-foreground">
                        Sortable, filterable table with pagination
                      </p>
                    </li>
                    <li>
                      <div className="font-medium">ThemeToggle</div>
                      <p className="text-sm text-muted-foreground">
                        Switch between dark, light, and system modes
                      </p>
                    </li>
                    <li>
                      <div className="font-medium">LoginForm</div>
                      <p className="text-sm text-muted-foreground">
                        Form with validation and error handling
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>
                    How to set up and run the project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Prerequisites</h3>
                      <ul className="space-y-1 ml-6 list-disc text-muted-foreground">
                        <li>Node.js 16.8 or later</li>
                        <li>npm or yarn package manager</li>
                        <li>
                          Neon PostgreSQL database (or another PostgreSQL
                          instance)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Installation Steps</h3>
                      <ol className="space-y-1 ml-6 list-decimal text-muted-foreground">
                        <li>Clone the repository from GitHub</li>
                        <li>
                          Run{" "}
                          <code className="bg-muted px-1 rounded-sm">
                            npm install
                          </code>{" "}
                          to install dependencies
                        </li>
                        <li>Configure environment variables (.env file)</li>
                        <li>
                          Run{" "}
                          <code className="bg-muted px-1 rounded-sm">
                            npx prisma migrate dev
                          </code>{" "}
                          to set up the database
                        </li>
                        <li>
                          Start the development server with{" "}
                          <code className="bg-muted px-1 rounded-sm">
                            npm run dev
                          </code>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">
                        Environment Variables
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Required environment variables for the project:
                      </p>
                      <ul className="space-y-1 ml-6 list-disc text-muted-foreground">
                        <li>
                          <code className="bg-muted px-1 rounded-sm">
                            DATABASE_URL
                          </code>
                          : Your Neon PostgreSQL connection string
                        </li>
                        <li>
                          <code className="bg-muted px-1 rounded-sm">
                            JWT_SECRET
                          </code>
                          : Secret key for JWT token generation
                        </li>
                        <li>
                          <code className="bg-muted px-1 rounded-sm">
                            NEXTAUTH_URL
                          </code>
                          : URL of your application
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deployment</CardTitle>
                  <CardDescription>
                    How to deploy the application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Vercel Deployment</h3>
                      <p className="text-sm text-muted-foreground">
                        This project is configured for easy deployment on
                        Vercel:
                      </p>
                      <ol className="space-y-1 ml-6 list-decimal text-muted-foreground mt-2">
                        <li>Connect your GitHub repository to Vercel</li>
                        <li>
                          Configure environment variables in the Vercel
                          dashboard
                        </li>
                        <li>Deploy automatically from your main branch</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">
                        Other Hosting Options
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        The project can also be deployed to:
                      </p>
                      <ul className="space-y-1 ml-6 list-disc text-muted-foreground">
                        <li>Netlify</li>
                        <li>AWS Amplify</li>
                        <li>Any hosting service supporting Next.js</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="border-dashed">
            <CardHeader className="text-center">
              <CardTitle>Ready to explore the dashboard?</CardTitle>
              <CardDescription>
                Experience all features firsthand
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center pb-6">
              <Button size="lg" className="gap-2" onClick={handleDemoClick}>
                <Smartphone className="h-4 w-4" />
                View Demo
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="border-t py-6 md:py-8 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="ext-center text-sm text-muted-foreground md:text-left">
              🌟 Dashboard Project - Crafted with Next.js and shadcn/ui 🌟
            </p>

            <div className="flex gap-4 items-center mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/sagarmanchakatla/dynamic-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} Sagar Manchakatla. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
