
import { Route, Routes } from "react-router";

import Layout from "@/components/layout";
import HomeScreen from "@/pages/HomeScreen";
import NotFoundScreen from "@/pages/NotFoundScreen";
import PostDetailsScreen from "@/pages/PostDetailsScreen";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/posts/:postId" element={<PostDetailsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
