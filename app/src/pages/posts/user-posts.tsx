import { UserPosts } from "@/components/post/posts";
import { Button } from "@/components/ui/button";
const UserPostPage = () => {
  return (
    <div className="flex items-center flex-wrap gap-2 w-full py-20">
      <div className="flex items-center justify-between w-full md:px-16 px-4 mb-6">
        <h1 className="text-3xl font-bold">Your Posts</h1>
        <Button className="bg-sky-600 text-white dark:bg-sky-700">
          Create a New Post
        </Button>
      </div>
      <UserPosts />
    </div>
  );
};

export default UserPostPage;
