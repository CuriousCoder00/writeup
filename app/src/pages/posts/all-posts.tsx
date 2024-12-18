import React from "react";
import Posts  from "@/components/post/posts";
const PostPage = () => {
  return (
    <div className="flex items-center flex-wrap gap-2 w-full mt-16">
        All Posts
      <Posts />
    </div>
  );
};

export default PostPage;
