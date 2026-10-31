import { Button } from "@/components/ui/button";
import { gutter } from "@/lib/layout";
import { useComments } from "../comments.hooks";
import type { Comment } from "../comments.types";
import CommentItem, { CommentItemSkeleton } from "./Comment";

const CommentList = ({ postId }: { postId: Comment["postId"] }) => {
  const { isPending, isError, error, data, refetch } = useComments(postId);

  return (
    <section className={`mt-16 border-t border-border pt-10 ${gutter}`}>
      <p className="text-sm tabular-nums text-muted-foreground sm:mt-0.5 sm:text-right">
        {data ? data.length : null}
      </p>

      <div className="min-w-0">
        <h2 className="text-sm font-medium tracking-tight">Comments</h2>

        <div className="mt-6 flex flex-col gap-3">
          {isPending && (
            <>
              <p role="status" className="sr-only">
                Loading comments
              </p>

              <div aria-hidden className="flex flex-col gap-3">
                {[1, 2, 3].map((index) => (
                  <CommentItemSkeleton key={index} />
                ))}
              </div>
            </>
          )}

          {isError && (
            <div>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                {error.message}
              </p>

              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => refetch()}
              >
                Try again
              </Button>
            </div>
          )}

          {data?.length === 0 && (
            <p className="text-[0.9375rem] text-muted-foreground">
              No comments on this post.
            </p>
          )}

          {data?.map((comment) => (
            <CommentItem comment={comment} key={comment.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentList;
