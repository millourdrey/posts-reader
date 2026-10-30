import { Button } from "@/components/ui/button";
import { usePosts } from "../posts.hooks";
import PostRow, { PostRowSkeleton } from "./Post";

const PostList = () => {
  const { isPending, isError, error, data, refetch } = usePosts();

  if (isPending) {
    return (
      <section className="space-y-4" aria-live="polite" aria-busy="true">
        <p className="sr-only" role="status">
          Loading posts
        </p>
        {[1, 2, 3, 4, 5].map((index) => (
          <PostRowSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-medium">The posts didn't load</h2>
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <Button onClick={() => void refetch()} className="mt-2">
          Try again
        </Button>
      </section>
    );
  }

  if (data.length === 0) {
    return (
      <section className="mt-8">
        <p>Nothing published yet.</p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      {data.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostList;
