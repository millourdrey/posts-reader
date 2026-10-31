
import { isAxiosError } from "axios";
import { Link, useParams } from "react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePost } from "@/features/posts/posts.hooks";

const PostDetailsScreen = () => {
  const { postId } = useParams();
  const id = Number(postId);

  const { isPending, isError, error, data, refetch } = usePost(id);

  if (!Number.isInteger(id) || id < 1) {
    return (
      <main className="container mx-auto space-y-4 px-4 py-8">
        <h1 className="text-2xl font-bold">404</h1>
        <p>No post at this address.</p>
        <Link to="/" className={buttonVariants()}>
          Browse all posts
        </Link>
      </main>
    );
  }

  if (isPending) {
    return (
      <main className="container mx-auto space-y-6 px-4 py-8" role="status">
        <p className="sr-only">Loading post...</p>
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-4 w-32" />
        <div className="space-y-3 pt-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </main>
    );
  }

  if (isError) {
    const missing = isAxiosError(error) && error.response?.status === 404;

    return (
      <main className="container mx-auto space-y-4 px-4 py-8">
        {missing && <p className="text-sm">404</p>}
        <h1 className="text-2xl font-bold">
          {missing ? "No post at this address" : "The post didn't load"}
        </h1>
        <p className="text-muted-foreground">
          {missing
            ? "This post either never existed or has been deleted."
            : error.message}
        </p>
        {missing ? (
          <Link to="/" className={buttonVariants()}>
            Browse all posts
          </Link>
        ) : (
          <Button onClick={() => refetch()}>Try again</Button>
        )}
      </main>
    );
  }

  const paragraphs = (data.body ?? "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="container mx-auto px-4 py-8">
      <article>
        <div className="grid gap-x-6 sm:grid-cols-[3.5rem_minmax(0,1fr)]">
          <p className="text-sm text-muted-foreground">#{data.id}</p>

          <div>
            <h1 className="font-reading text-4xl font-semibold tracking-tight sm:text-5xl">
              {data.title}
            </h1>

            {typeof data.userId === "number" && (
              <p className="mt-4 text-sm text-muted-foreground">
                Author {data.userId}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-x-6 sm:grid-cols-[3.5rem_minmax(0,1fr)]">
          <div />
          <div className="space-y-5 leading-8">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
};

export default PostDetailsScreen;
