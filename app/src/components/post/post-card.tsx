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
  Share,
  Share2,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { timeAgo } from "@/lib/utils";

const PostCard = (post: Post) => {
  const userId = localStorage.getItem("writeup_userId");
  return (
    <Card className="h-full shadow-inner dark:shadow-slate-600 shadow-slate-300 w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex w-full flex-wrap border-l-2 border-l-sky-600 pl-3">
            {post.title}
          </CardTitle>
          {post.authorId === userId && <MoreOptions />}
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
          <span className="text-xs">2</span>
        </Button>
        <Button className="bg-background hover:bg-background text-foreground">
          <MessageCirclePlus />
          <span className="text-xs">2</span>
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

const MoreOptions = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <MoreVertical />
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={1}
        className="flex flex-col p-2 mt-20 w-14"
      >
        <Button variant={"ghost"}>
          <Edit />
        </Button>
        <Button variant={"ghost"}>
          <Delete />
        </Button>
        <Button variant={"ghost"}>
          <Share />
        </Button>
      </PopoverContent>
    </Popover>
  );
};
