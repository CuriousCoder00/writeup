import { Link, useLocation } from "react-router";
import { links } from "@/lib/constants";
import ThemeToggle from "./theme-toggle";
const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="flex items-center justify-center fixed top-0 w-full min-h-16 md:px-12 px-4 backdrop-blur-lg dark:bg-black/50 bg-slate-200/50 z-10 border-b shadow-sm">
      <nav className="flex items-center justify-between w-full">
        <Link to="/" className="font-bold text-lg">
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
          </div>
          <Link to='/auth/login' className="px-5 py-2 rounded bg-sky-600 text-white dark:bg-sky-700 ">
            Login
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Header;
