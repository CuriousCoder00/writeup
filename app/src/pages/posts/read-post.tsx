import { getPostById } from "@/lib/services/post.services";
import { dateToString, timeAgo } from "@/lib/utils";
import { Post } from "@/lib/validations/post.validator";
import React from "react";
import { useLocation } from "react-router";

const ReadPost = () => {
  const path = useLocation();
  const id = path.pathname.split("/")[2];
  const [post, setPost] = React.useState<Post>();
  const fetchPost = async () => {
    const response = await getPostById(id);
    setPost(response.data);
  };
  React.useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="flex items-center justify-center w-full h-full pt-20 mx-auto md:px-20 px-4">
      {post ? (
        <div className="w-full max-w-5xl">
          <h1 className="text-3xl font-bold border-l-4 border-l-sky-500 pl-3 bg-slate-600/20 rounded-tr-md py-1">
            {post?.title}
          </h1>
          <div className="flex items-center justify-between w-full">
            <p className="text-neutral-500 mt-2">By {post?.author.name}</p>
            <p className="text-neutral-500 mt-2">
              {timeAgo(post?.createdAt)} ago
            </p>
          </div>
          <p className="text-lg mt-4">{post?.content}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default ReadPost;
