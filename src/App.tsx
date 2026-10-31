
import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import HomeScreen from "./pages/HomeScreen";
import PostDetailsScreen from "./pages/PostDetailsScreen";
import NotFoundScreen from "./pages/NotFoundScreen";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/posts/:postId"
          element={<PostDetailsScreen />}
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
