import { useTheme } from "@/hooks/use-theme";
import { MoonStar, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      {theme === "dark" ? (
        <Button className="px-3" variant={"ghost"} onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      ) : (
        <Button className="px-3" variant={"ghost"} onClick={() => setTheme("dark")}>
          <MoonStar />
        </Button>
      )}
    </div>
  );
};

export default ThemeToggle;
