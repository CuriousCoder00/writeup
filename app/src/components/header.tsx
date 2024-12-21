import { Link, useLocation } from "react-router";
import { links } from "@/lib/constants";
import { ThemeToggle, ThemeToggleWithText } from "./theme-toggle";
import { Button } from "./ui/button";
import { logoutService } from "@/lib/services/auth.services";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAuthenticated, sessionState } from "@/lib/store/atoms";
import { ProfileMenu } from "./profile-menu";
import { LucideLogOut, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { toast } from "@/hooks/use-toast";
const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isLoggedIn = useRecoilValue(isAuthenticated);
  const setSession = useSetRecoilState(sessionState);
  const logout = async () => {
    try {
      const res = await logoutService();
      if (res.success) {
        localStorage.removeItem("writeup_token");
        localStorage.removeItem("writeup_userId");
        localStorage.removeItem("writeup_user");
        setSession({
          user: {
            id: "",
            name: "",
            email: "",
            image: "",
          },
          token: "",
        });
        toast({
          variant: "default",
          title: "Logout successful",
        });
        window.location.href = "/";
      } else {
        toast({
          variant: "destructive",
          title: res.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (error as Error).message,
      });
    }
  };
  return (
    <header className="flex items-center justify-center fixed top-0 w-full min-h-16 md:px-12 px-4 backdrop-blur-2xl dark:bg-black/20 bg-slate-200/20 border-b shadow-md z-[100]">
      <nav className="flex items-center justify-between w-full">
        <Link
          to="/"
          className="font-bold text-lg flex items-center gap-1 justify-start"
        >
          <img src="/pen.png" alt="logo" className="w-7 h-6 dark:invert" />
          Write<span className="text-sky-600">Up</span>
        </Link>
        <div className="flex items-center justify-end gap-3 text-sm">
          <div className="flex items-center justify-center gap-4 max-md:hidden">
            {links.map((link, idx) => (
              <Link
                className={`no-underline relative group text-base hover:dark:text-sky-400 hover:text-sky-600 text-gray-600 dark:text-gray-400 ${
                  currentPath === link.href
                    ? "dark:text-sky-400 text-sky-600"
                    : ""
                }`}
                to={link.href}
                key={idx}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 dark:bg-sky-500 rounded transition-transform origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 duration-300 ease-in-out ${
                    currentPath === link.href
                      ? "scale-x-100 dark:bg-sky-400 bg-sky-700"
                      : ""
                  }`}
                ></span>
              </Link>
            ))}
            {isLoggedIn && (
              <div className="flex items-center justify-center gap-4 max-md:hidden">
                <Link
                  className={`no-underline relative group text-base hover:dark:text-sky-400 hover:text-sky-600 text-gray-600 dark:text-gray-400 ${
                    currentPath === "/posts/u"
                      ? "dark:text-sky-400 text-sky-600"
                      : ""
                  }`}
                  to={"/posts/u"}
                >
                  Your Posts
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 dark:bg-sky-500 rounded transition-transform origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 duration-300 ease-in-out ${
                      currentPath === "/posts/u"
                        ? "scale-x-100 dark:bg-sky-400 bg-sky-700"
                        : ""
                    }`}
                  ></span>
                </Link>
              </div>
            )}
          </div>
          {isLoggedIn ? (
            <ProfileMenu>
              <Button
                variant={"ghost"}
                className="w-full rounded-none flex items-center justify-start pl-3"
                onClick={logout}
              >
                <LucideLogOut /> Logout
              </Button>
              <ThemeToggleWithText />
            </ProfileMenu>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/auth/login"
                className="px-5 py-2 rounded bg-sky-600 text-white dark:bg-sky-700 "
              >
                Login
              </Link>
              <ThemeToggle />
            </div>
          )}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>

              <SheetContent side="top" className="flex flex-col z-[101]">
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      to="/"
                      className="font-bold text-lg flex items-center gap-1 justify-start"
                    >
                      <img
                        src="/pen.png"
                        alt="logo"
                        className="w-7 h-6 dark:invert"
                      />
                      Write<span className="text-sky-600">Up</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                {links.map((link, idx) => (
                  <Link
                    className={`no-underline relative group text-base hover:dark:text-sky-400 hover:text-sky-600 text-gray-600 dark:text-gray-400 ${
                      currentPath === link.href
                        ? "dark:text-sky-400 text-sky-600"
                        : ""
                    }`}
                    to={link.href}
                    key={idx}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 dark:bg-sky-500 rounded transition-transform origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 duration-300 ease-in-out ${
                        currentPath === link.href
                          ? "scale-x-100 dark:bg-sky-400 bg-sky-700"
                          : ""
                      }`}
                    ></span>
                  </Link>
                ))}
                {isLoggedIn && (
                  <div className="flex flex-col items-start w-full justify-center gap-4 max-md:hidden">
                    <Link
                      className="no-underline relative group text-base hover:dark:text-sky-400 hover:text-sky-600 text-gray-600 dark:text-gray-400 w-full"
                      to={"/posts/u"}
                    >
                      Your Posts
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 dark:bg-sky-500 rounded transition-transform origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 duration-300 ease-in-out"></span>
                    </Link>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
