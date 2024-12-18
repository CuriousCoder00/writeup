import { Post } from "@/lib/validations/post.validator";
import { Card, CardDescription, CardTitle } from "../ui/card";

const PostCard = (post: Post) => {
  return (
    <Card>
      <CardTitle>{post.title}</CardTitle>
      <CardDescription>{post.content}</CardDescription>
    </Card>
  );
};

export default PostCard;
