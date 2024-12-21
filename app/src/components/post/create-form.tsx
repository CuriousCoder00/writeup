import { useToast } from "@/hooks/use-toast";
import { createPost } from "@/lib/services/post.services";
import {
  createPostSchema,
  CreatePostType,
} from "@/lib/validations/post.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const CreatePostForm = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<CreatePostType>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const handleCreatePost = async (data: CreatePostType) => {
    setLoading(true);
    try {
      const res = await createPost(data);
      toast({
        title: res.message,
        variant: res.status === 201 ? "default" : "destructive",
      });
      if (res.status === 201) {
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-start justify-center mx-auto md:px-24 px-4 w-full md:mt-20 sm:mt-16">
      <Form {...form}>
        <form
          className="flex flex-col w-full gap-4 my-4"
          onSubmit={form.handleSubmit(handleCreatePost)}
        >
          <div className="w-full max-h-52 overflow-hidden flex items-center justify-center">
            <img
            className="aspect-video object-cover w-full object-center mt-40"
              src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="blog picture"
            />
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="This post is about..."
                    disabled={loading}
                    required
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="font-mono"
                    rows={5}
                    placeholder="Write your post here..."
                    disabled={loading}
                    required
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Create Post"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreatePostForm;
