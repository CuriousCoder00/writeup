import Hero from "@/components/landing/hero";
import { AllPosts } from "@/components/post/posts";
import { useSession } from "@/hooks/use-session";
import { isAuthenticated } from "@/lib/store/atoms";
import { useRecoilValue } from "recoil";

const Home = () => {
  const isLoggedIn = useRecoilValue(isAuthenticated);
  const { session } = useSession();
  return (
    <div className="flex flex-col mx-auto w-full overflow-x-hidden relative">
      <div className="flex flex-col items-center justify-center px-5 min-h-dvh opacity-100 relative">
        <div className="absolute top-0 -right-60 bottom-0 -left-96 glare-image opacity-20 blur-md dark:hue-rotate-0 hue-rotate-180" />
        <div className="absolute top-1 -right-96 bottom-0 -left-48 bg-opacity-40 dark:mix-blend-color-dodge mix-blend-screen blur-md light-rays animate-rays" />
        <div className="flex flex-col items-center justify-start w-full h-full z-30">
          <Hero />
          {isLoggedIn && (
            <div className="flex flex-col items-start justify-start w-full max-w-screen-xl mx-auto px-4 sm:px-8">
              <h1 className="text-3xl font-bold">
                Welcome, {session.user.name}{" "}
              </h1>
              <p className="text-lg text-gray-500">
                Here are the latest posts from the community
              </p>
              <div className="flex flex-col items-start justify-start w-full overflow-x-auto">
                <AllPosts />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
