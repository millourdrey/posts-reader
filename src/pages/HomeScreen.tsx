import PostList from "@/features/posts/components/PostList";

const HomeScreen = () => {
  return (
    <>
      <h1 className="sr-only">Posts</h1>
      <PostList />
    </>
  );
};

export default HomeScreen;
