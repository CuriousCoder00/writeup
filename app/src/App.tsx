import { Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/register";
import AllPostPage from "./pages/posts/all-posts";
import UserPostPage from "./pages/posts/user-posts";

function App() {
  return (
    <Routes>
      <Route index element={<div>Hello</div>} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<SignupPage />} />
      <Route path="/posts" element={<AllPostPage />} />
      <Route path="/posts/u" element={<UserPostPage />} />
    </Routes>
  );
}

export default App;
