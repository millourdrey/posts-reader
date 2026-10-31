
import { Button } from "@/components/ui/button";
import { usePosts } from "../posts.hooks";
import PostRow, { PostRowSkeleton } from "./Post";

const PostList = () => {
  const { isPending, isError, error, data, refetch } = usePosts();

  if (isPending) {
    return (
      <div className="space-y-4" role="status">
        <p className="sr-only">Loading posts...</p>
        {[1, 2, 3, 4, 5].map((index) => (
          <PostRowSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          The posts didn't load
        </h2>
        <p className="text-sm text-muted-foreground">
          {error.message}
        </p>
        <Button onClick={() => refetch()}>Try again</Button>
      </div>
    );
  }

  if (data.length === 0) {
    return <p>Nothing published yet.</p>;
  }

  return (
    <div className="grid gap-4">
      {data.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
