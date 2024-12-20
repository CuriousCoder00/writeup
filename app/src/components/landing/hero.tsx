import { Link } from "react-router";
import { Button } from "../ui/button";
import { useRecoilValue } from "recoil";
import { isAuthenticated } from "@/lib/store/atoms";
import { PenLine } from "lucide-react";

const Hero = () => {
  const isLoggedIn = useRecoilValue(isAuthenticated);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[30rem]">
      {isLoggedIn ? (
        <div className="flex flex-col items-center justify-center w-full h-full md:text-center sm:text-pretty text-pretty px-4 sm:px-8 md:max-w-[900px] gap-4">
          <div className="flex items-center justify-center border rounded-xl border-blue-500 bg-blue-500/30 px-6 gap-4 dark:text-white text-blue-700">
            <PenLine size={16} />
            Write Your Thoughts
          </div>
          <h1 className="md:text-5xl  text-3xl font-bold text-slate-800 dark:text-white">
            Welcome Back to{" "}
            <span className="bg-gradient-to-r dark:from-sky-700 from-sky-400 dark:via-sky-500 via-sky-500 dark:to-white to-sky-700 text-transparent bg-clip-text">
              WriteUp
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Your hub for innovation, ideas, and community.
          </p>
          <div className="flex max-md:flex-col max-md:w-full items-center justify-center gap-3">
            <Button
              className="bg-sky-600 text-white hover:bg-sky-700 w-full hover:scale-105 transition-transform duration-200 ease-in-out"
              asChild
            >
              <Link to="#">Write a New Blog</Link>
            </Button>
            <Button
              className="w-full hover:scale-105 transition-transform duration-200 ease-in-out"
              variant={"outline"}
            >
              Continue Reading
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:items-center items-start justify-center w-full h-full md:text-center sm:text-pretty text-pretty px-4 sm:px-8 md:max-w-[900px] gap-4">
          <div className="flex items-center justify-center border rounded-xl border-blue-500 bg-blue-500/30 px-6 gap-4 dark:text-white text-blue-700">
            <PenLine size={16} />
            Write Your Thoughts
          </div>
          <h1 className="md:text-5xl  text-3xl font-bold text-slate-800 dark:text-white">
            Explore the Future of Technology and Innovation with{" "}
            <span className="bg-gradient-to-r dark:from-sky-700 from-sky-400 dark:via-sky-500 via-sky-500 dark:to-white to-sky-700 text-transparent bg-clip-text">
              WriteUp
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Stay updated with the latest industry trends, discover
            groundbreaking ideas, and become a part of a community that thrives
            on innovation.
          </p>
          <div className="flex max-md:flex-col max-md:w-full items-center justify-center gap-3">
            <Button
              className="bg-sky-600 text-white hover:bg-sky-700 w-full hover:scale-105 transition-transform duration-200 ease-in-out"
              asChild
            >
              <Link to="/auth/register">Get Started for Free</Link>
            </Button>
            <Button
              className="w-full hover:scale-105 transition-transform duration-200 ease-in-out"
              variant={"outline"}
            >
              Discover Trending Blogs
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
