
import { Link } from "react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post } from "../posts.types";

const PostRow = ({ post }: { post: Post }) => {
  return (
    <Card className="relative transition-colors hover:bg-muted/50">
      <CardHeader>
        <CardTitle className="line-clamp-2">
          <Link
            to={`/posts/${post.id}`}
            className="before:absolute before:inset-0 before:content-['']"
          >
            {post.title}
          </Link>
        </CardTitle>

        <CardAction>
          <span className="text-sm text-muted-foreground">
            #{post.id}
          </span>
        </CardAction>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {post.body}
        </p>
      </CardContent>
    </Card>
  );
};

export default PostRow;

export const PostRowSkeleton = () => {
  return (
    <Card aria-hidden="true">
      <CardHeader>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-12" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  );
};
