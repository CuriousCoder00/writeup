import { Post } from "@/lib/validations/post.validator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Delete,
  Edit,
  HeartIcon,
  MessageCirclePlus,
  MoreVertical,
  Share2,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { timeAgo } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { deletePost } from "@/lib/services/post.services";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { postsState } from "@/lib/store/atoms";

const PostCard = (post: Post) => {
  const userId = localStorage.getItem("writeup_userId");
  return (
    <Card className="h-full shadow-inner dark:shadow-slate-600 shadow-slate-300 w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex w-full flex-wrap border-l-2 border-l-sky-600 pl-3">
            {post.title}
          </CardTitle>
          {post.authorId === userId && <MoreOptions postId={post.id} />}
        </div>
        <CardDescription>{post.content}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <span className="text-xs">{post.author.name}</span>
          <span className="text-xs">{timeAgo(post.createdAt)} ago</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-background hover:bg-background text-foreground">
          <HeartIcon className="size-40" />
          <span className="text-xs">{post.Likes?.length}</span>
        </Button>
        <Button className="bg-background hover:bg-background text-foreground">
          <MessageCirclePlus />
          <span className="text-xs">{post.Comments?.length}</span>
        </Button>
        <Button className="bg-background hover:bg-background text-foreground">
          <Share2 />
          <span className="text-xs">2</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

const MoreOptions = ({ postId }: { postId: string }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <MoreVertical />
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={1}
        className="flex flex-col p-2 mt-16 w-14"
      >
        <Button variant={"ghost"}>
          <Edit />
        </Button>
        <DeleteDialog postId={postId} />
      </PopoverContent>
    </Popover>
  );
};

const DeleteDialog = ({ postId }: { postId: string }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const setPostsData = useSetRecoilState(postsState);
  const handleDelete = async () => {
    setLoading(true);
    const res = await deletePost(postId);
    if (res) {
      toast({
        variant: "default",
        title: res,
      });
      setPostsData((prev) => prev.filter((post) => post.id !== postId));
    }
    setLoading(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <Delete />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Post</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this post?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-4">
          <Button disabled={loading} variant={"ghost"}>
            Cancel
          </Button>
          <Button
            disabled={loading}
            variant={"destructive"}
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
