import api from "@/lib/api";
import type { Post } from "./posts.types";

export const getPosts = async () => {
  const res = await api.get<Post[]>("/posts");
  return res.data;
};

export const getPost = async (id: Post["id"]) => {
  const res = await api.get<Post>(`/posts/${id}`);
  return res.data;
};
