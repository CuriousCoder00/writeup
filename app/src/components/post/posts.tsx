import { getAllPosts, getUserPosts } from "@/lib/services/post.services";
import { Post } from "@/lib/validations/post.validator";
import React from "react";
import PostCard from "./post-card";
import { Loader } from "lucide-react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { postsState } from "@/lib/store/atoms";
import { useToast } from "@/hooks/use-toast";

export const AllPosts = () => {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const fetchPosts = async () => {
    setLoading(true);
    const response = await getAllPosts();
    setLoading(false);
    setPosts(response.data);
  };
  React.useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="flex max-w-screen overflow-x-auto flex-nowrap gap-4 p-4 pt-4 relative w-full min-h-40">
      {loading ? (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/25">
          <Loader className="animate-spin" />
        </div>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center justify-center gap-4 min-w-96 min-h-40"
          >
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <div className="text-center w-full">No posts available</div>
      )}
    </div>
  );
};

export const UserPosts = () => {
  const { toast } = useToast();

  const [loading, setLoading] = React.useState(false);

  const setPostsData = useSetRecoilState(postsState);
  const postData = useRecoilValue(postsState);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await getUserPosts();

    if (response.status !== 200) {
      toast({
        title: response.message,
        variant: "destructive",
      });
    }

    setLoading(false);
    setPostsData(response.data);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto w-full px-4 md:px-12">
      {loading ? (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/25">
          <Loader className="animate-spin" />
        </div>
      ) : postData.length > 0 ? (
        postData.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div className="text-center w-full">No posts available</div>
      )}
    </div>
  );
};
