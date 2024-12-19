import { Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/register";
import AllPostPage from "./pages/posts/all-posts";
import UserPostPage from "./pages/posts/user-posts";
import { useRecoilState, useRecoilValue } from "recoil";
import { isAuthenticated } from "./lib/store/atoms";
import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isAuthenticated);
  useEffect(() => {
    const token = localStorage.getItem("writeup_token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log("App mounted");
  }, [setIsLoggedIn]);
  return (
    <Routes>
      <Route index element={<div className="mt-20">Hello</div>} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<SignupPage />} />
      <Route path="/posts" element={<AllPostPage />} />
      <Route path="/posts/u" element={<UserPostPage />} />
    </Routes>
  );
}

export default App;
