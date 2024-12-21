import { Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/register";
import UserPostPage from "./pages/posts/user-posts";
import { useSetRecoilState } from "recoil";
import { isAuthenticated, sessionState } from "./lib/store/atoms";
import { useEffect } from "react";
import { useSession } from "./hooks/use-session";
import Home from "./pages/home";
import CreatePost from "./pages/posts/create-post";
import ReadPost from "./pages/posts/read-post";

function App() {
  const setIsLoggedIn = useSetRecoilState(isAuthenticated);
  const setState = useSetRecoilState(sessionState);
  const { session } = useSession();
  useEffect(() => {
    const token = localStorage.getItem("writeup_token");
    const user = localStorage.getItem("writeup_user");
    if (token && user) {
      setState({ user: JSON.parse(user), token });
    }
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log("App mounted");
    console.log(session);
  }, [setIsLoggedIn, setState]);
  return (
    <div className="max-w-screen overflow-hidden">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<SignupPage />} />
        <Route path="/posts/u" element={<UserPostPage />} />
        <Route path="/posts/u/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<ReadPost />} />
      </Routes>
    </div>
  );
}

export default App;
