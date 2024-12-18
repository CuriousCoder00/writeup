import { Post } from "@/lib/validations/post.validator";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Delete, Edit, MoreVertical, Share } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { dateToString } from "@/lib/utils";

const PostCard = (post: Post) => {
  const userId = localStorage.getItem("writeup_userId");
  return (
    <Card className="shadow-inner dark:shadow-slate-600 shadow-slate-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex w-full flex-wrap border-l-2 border-l-sky-600 pl-3">
            {post.title}
          </CardTitle>
          {post.authorId === userId && <MoreOptions />}
        </div>
        <CardDescription>{post.content}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <span className="text-xs">{post.author.name}</span>
        <span className="text-xs">{dateToString(post.createdAt)}</span>
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
        className="flex p-2 mt-2 w-40"
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
