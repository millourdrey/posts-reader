
import PostList from "@/features/posts/components/PostList";

const HomeScreen = () => {
  return (
    <main className="container mx-auto space-y-6 px-4 py-8">
      <h1 className="sr-only">Posts</h1>
      <PostList />
    </main>
  );
};

export default HomeScreen;
