import { Link, useLocation } from "react-router";

import { buttonVariants } from "@/components/ui/button";
import { gutter } from "@/lib/layout";

const NotFoundScreen = () => {
  const { pathname } = useLocation();

  return (
    <main className={`${gutter} mt-8 items-start`}>
      <div className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
        404
      </div>

      <div className="space-y-5">
        <h1 className="text-3xl font-semibold tracking-tight">This page doesn't exist</h1>
        <p className="text-muted-foreground">
          Nothing is routed at <code>{pathname}</code>.
        </p>

        <Link className={buttonVariants({ variant: "default" })} to="/">
          Browse all posts
        </Link>
      </div>
    </main>
  );
};

export default NotFoundScreen;
