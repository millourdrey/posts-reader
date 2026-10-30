import { ArrowLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";

import { ModeToggle } from "@/components/mode-toggle";

const Layout = () => {
  const { pathname } = useLocation();
  const atRoot = pathname === "/";

  return (
    <div className="min-h-screen px-6 py-10 sm:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-8 flex items-center justify-between gap-5">
          {atRoot ? (
            <span className="text-lg font-medium tracking-[-0.01em]">Posts</span>
          ) : (
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium">
              <ArrowLeft className="h-4 w-4" />
              All posts
            </Link>
          )}

          <ModeToggle />
        </header>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
