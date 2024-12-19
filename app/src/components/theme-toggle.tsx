import { useTheme } from "@/hooks/use-theme";
import { MoonStar, Sun } from "lucide-react";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      {theme === "dark" ? (
        <Button
          className="px-3"
          variant={"ghost"}
          onClick={() => setTheme("light")}
        >
          <Sun />
        </Button>
      ) : (
        <Button
          className="px-3"
          variant={"ghost"}
          onClick={() => setTheme("dark")}
        >
          <MoonStar />
        </Button>
      )}
    </div>
  );
};

export const ThemeToggleWithText = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center w-full">
      {theme === "dark" ? (
        <Button
          className="w-full flex items-center justify-start pl-3"
          variant={"ghost"}
          onClick={() => setTheme("light")}
        >
          <Sun /> Light Mode
        </Button>
      ) : (
        <Button
          className="w-full flex items-center justify-start pl-3"
          variant={"ghost"}
          onClick={() => setTheme("dark")}
        >
          <MoonStar /> Dark Mode
        </Button>
      )}
    </div>
  );
};
