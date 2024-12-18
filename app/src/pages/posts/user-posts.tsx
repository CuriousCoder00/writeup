import { UserPosts } from "@/components/post/posts";
const UserPostPage = () => {
  return (
    <div className="flex items-center flex-wrap gap-2 w-full py-20">
      <UserPosts />
    </div>
  );
};

export default UserPostPage;
