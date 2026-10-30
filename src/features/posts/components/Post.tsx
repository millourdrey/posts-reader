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
    <Card className="relative">
      <CardHeader className="relative">
        <CardTitle className="relative">
          <Link
            to={`/posts/${post.id}`}
            className="relative z-10 before:absolute before:inset-0 before:z-0 before:content-['']"
          >
            {post.title}
          </Link>
        </CardTitle>

        <CardAction className="text-xs text-muted-foreground">
          #{post.id}
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
    <Card className="relative">
      <CardHeader className="relative">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-6 w-10" />
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
    </Card>
  );
};
