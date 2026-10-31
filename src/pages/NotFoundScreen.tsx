
import { Link, useLocation } from "react-router";
import { buttonVariants } from "@/components/ui/button";

const NotFoundScreen = () => {
  const { pathname } = useLocation();

  return (
    <main className="container mx-auto space-y-4 px-4 py-12">
      <p className="text-sm font-medium text-muted-foreground">404</p>

      <h1 className="text-3xl font-bold">
        This page doesn't exist
      </h1>

      <p className="text-muted-foreground">
        Nothing is routed at <code>{pathname}</code>.
      </p>

      <Link to="/" className={buttonVariants()}>
        Browse all posts
      </Link>
    </main>
  );
};

export default NotFoundScreen;
