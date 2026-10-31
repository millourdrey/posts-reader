import Avatar from "@/components/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Comment } from "../comments.types";

const initialOf = (email: string) =>
  email.trim().charAt(0).toUpperCase() || "?";

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <Card size="sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>{initialOf(comment.email)}</Avatar>
          <h3 className="min-w-0 text-[0.9375rem] leading-snug font-medium tracking-[-0.005em] first-letter:uppercase">
            {comment.name}
          </h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[0.9375rem] leading-[1.65] text-foreground/80">
          {comment.body}
        </p>
      </CardContent>
    </Card>
  );
};

export const CommentItemSkeleton = () => {
  return (
    <Card size="sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 shrink-0 rounded-full" />
          <Skeleton className="h-4 w-3/5 rounded-md" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-4 rounded-md" />
        <Skeleton className="h-4 w-11/12 rounded-md" />
        <Skeleton className="h-4 w-2/3 rounded-md" />
      </CardContent>
    </Card>
  );
};

export default CommentItem;
