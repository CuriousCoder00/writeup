import { getAllPosts } from "@/lib/services/post.services";
import { Post } from "@/lib/validations/post.validator";
import React, { useEffect } from "react";
import PostCard from "./post-card";
import { Button } from "../ui/button";

const Posts = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const fetchPosts = async () => {
    const response = await getAllPosts();
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex items-center flex-wrap gap-2">
      <Button onClick={fetchPosts}>Fetch posts</Button>
      {posts && posts.map((post) => <PostCard key={post.id} {...post} />)}
    </div>
  );
};

export default Posts;
