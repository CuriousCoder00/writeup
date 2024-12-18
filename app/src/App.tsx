import { Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/register";
import PostPage from "./pages/posts/all-posts";

function App() {
  return (
    <Routes>
      <Route index element={<div>Hello</div>} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<SignupPage />} />
      <Route path="/posts" element={<PostPage />} />
    </Routes>
  );
}

export default App;
