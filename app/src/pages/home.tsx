import Hero from "@/components/landing/hero";
import { AllPosts } from "@/components/post/posts";
import { useSession } from "@/hooks/use-session";
import { isAuthenticated } from "@/lib/store/atoms";
import { useRecoilValue } from "recoil";

const Home = () => {
  const isLoggedIn = useRecoilValue(isAuthenticated);
  const { session } = useSession();
  return (
    <div className="flex flex-col mx-auto max-w-screen-2xl">
      <Hero />
      {isLoggedIn && (
        <div className="flex flex-col items-start justify-start w-full max-w-screen-xl mx-auto px-4 sm:px-8">
          <h1 className="text-3xl font-bold">Welcome, {session.user.name} </h1>
          <p className="text-lg text-gray-500">
            Here are the latest posts from the community
          </p>
          <div className="flex flex-col items-start justify-start w-full overflow-x-auto">
            <AllPosts />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
