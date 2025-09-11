import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-dark pt-16">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-black text-glow-primary">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="bg-gradient-primary hover-glow-primary" asChild>
          <a href="/">Return Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
