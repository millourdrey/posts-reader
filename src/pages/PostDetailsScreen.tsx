import { isAxiosError } from "axios";
import { Link, useParams } from "react-router";

import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePost } from "@/features/posts/posts.hooks";
import { gutter } from "@/lib/layout";

const toParagraphs = (body: string) =>
  body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const railEdge = "sm:ml-20";

const PostDetailsScreen = () => {
  const { postId } = useParams();
  const { isPending, isError, error, data, refetch } = usePost(Number(postId));

  if (isPending) {
    return (
      <main className={`${gutter} mt-8 items-start`}>
        <div className={`${railEdge} hidden sm:block`}>
          <Skeleton className="h-16 w-14 rounded-xl" />
        </div>

        <div className="space-y-6">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-24 w-full" />
        </div>
      </main>
    );
  }

  if (isError) {
    const missing = isAxiosError(error) && error.response?.status === 404;

    return (
      <main className={`${gutter} mt-8 items-start`}>
        <div className={`${railEdge} hidden sm:block`}>
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {missing ? "404" : null}
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight">
            {missing ? "No post at this address" : "The post didn't load"}
          </h1>

          <p className="text-muted-foreground">
            {missing
              ? "This post either never existed or has been deleted."
              : error.message}
          </p>

          {missing ? (
            <Link className={buttonVariants({ variant: "default" })} to="/">
              Browse all posts
            </Link>
          ) : (
            <Button onClick={() => void refetch()}>Try again</Button>
          )}
        </div>
      </main>
    );
  }

  const paragraphs = toParagraphs(data.body ?? "");

  return (
    <main className={`${gutter} mt-8 items-start`}>
      <div className={`${railEdge} hidden sm:block`}>
        <p className="text-right text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          #{data.id}
        </p>
      </div>

      <article className="space-y-8">
        <header className="space-y-4">
          <p className="font-medium uppercase tracking-[0.18em] text-muted-foreground">
            #{data.id}
          </p>
          <h1 className="font-reading text-5xl leading-none tracking-tight text-foreground sm:text-6xl">
            {data.title}
          </h1>
          {typeof data.userId === "number" && (
            <p className="text-sm text-muted-foreground">Author {data.userId}</p>
          )}
        </header>

        {paragraphs.length > 0 && (
          <div className="space-y-5 text-lg leading-8 text-foreground/90">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </article>
    </main>
  );
};

export default PostDetailsScreen;
