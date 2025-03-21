"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PostCards, { PostCardsSkeleton } from "@/components/PostCard";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Dashboard() {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  const postsPerPage = 5;

  // Calculate pagination values
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allData.length / postsPerPage);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setAllData(result);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(
        error instanceof Error ? error : new Error("An unknown error occurred")
      );
    } finally {
      // Add a slight delay to show the loading state
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userEmail");

    if (!token || !email) {
      router.push("/login");
      return;
    }

    // Set the user's email
    setUserEmail(email);

    // Fetch initial data
    fetchData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(Number(pageNumber));
    // Scroll to top of the page when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate an array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than maxPagesToShow, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      // Calculate start and end of middle pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push("ellipsis1");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("ellipsis2");
      }

      // Always show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar logout={handleLogout} />
        <SidebarInset className="flex-1">
          <div className="flex flex-col min-h-screen">
            <Header
              onLogout={handleLogout}
              user={{ name: userEmail, email: userEmail }}
              title="Dashboard"
            />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-4 pb-8"
            >
              {loading ? (
                <div className="flex-1 py-4">
                  <PostCardsSkeleton />
                </div>
              ) : error ? (
                <div className="flex-1 flex items-center justify-center py-12">
                  <div className="max-w-md w-full">
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error Loading Content</AlertTitle>
                      <AlertDescription>
                        {error?.message ||
                          "Failed to load posts. Please try again later."}
                      </AlertDescription>
                    </Alert>
                    <Button
                      onClick={fetchData}
                      className="w-full"
                      variant="outline"
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Try Again
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 py-4">
                  <div className="flex items-center justify-between mb-6 px-4">
                    <div>
                      <h2 className="text-2xl  font-semibold text-foreground">
                        Recent Posts
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Showing {indexOfFirstPost + 1}-
                        {Math.min(indexOfLastPost, allData.length)} of{" "}
                        {allData.length} posts
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchData}
                      className="gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Refresh
                    </Button>
                  </div>

                  <PostCards data={currentPosts} />

                  {/* Pagination UI */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() =>
                                currentPage > 1 &&
                                handlePageChange(currentPage - 1)
                              }
                              className={
                                currentPage === 1
                                  ? "pointer-events-none opacity-50"
                                  : "cursor-pointer"
                              }
                            />
                          </PaginationItem>

                          {getPageNumbers().map((pageNumber, index) => (
                            <PaginationItem key={index}>
                              {pageNumber === "ellipsis1" ||
                              pageNumber === "ellipsis2" ? (
                                <PaginationEllipsis />
                              ) : (
                                <PaginationLink
                                  isActive={pageNumber === currentPage}
                                  onClick={() => handlePageChange(pageNumber)}
                                >
                                  {pageNumber}
                                </PaginationLink>
                              )}
                            </PaginationItem>
                          ))}

                          <PaginationItem>
                            <PaginationNext
                              onClick={() =>
                                currentPage < totalPages &&
                                handlePageChange(currentPage + 1)
                              }
                              className={
                                currentPage === totalPages
                                  ? "pointer-events-none opacity-50"
                                  : "cursor-pointer"
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </div>
              )}
            </motion.main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
