
import api from "@/lib/api";
import type { Post } from "./posts.types";

export const getPosts = async (): Promise<Post[]> => {
  const res = await api.get<Post[]>("/posts");
  return res.data;
};

export const getPost = async (
  id: Post["id"]
): Promise<Post> => {
  const res = await api.get<Post>(`/posts/${id}`);
  return res.data;
};
