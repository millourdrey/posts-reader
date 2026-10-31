
import { ArrowLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";

import { ModeToggle } from "@/components/mode-toggle";

const Layout = () => {
  const { pathname } = useLocation();
  const atRoot = pathname === "/";

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {atRoot ? (
            <Link to="/" className="text-xl font-bold">
              Posts
            </Link>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <ArrowLeft className="size-4" />
              All posts
            </Link>
          )}

          <ModeToggle />
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
