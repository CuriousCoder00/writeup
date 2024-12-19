import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useSession } from "@/hooks/use-session";

const ProfileAvatar = () => {
  const { session } = useSession();
  return (
    <Avatar>
      <AvatarFallback className="dark:bg-slate-800 bg-slate-300">
        {session.user.name[0]}
      </AvatarFallback>
      <AvatarImage src={session.user.image} alt={session.user.name} />
    </Avatar>
  );
};

export const ProfileMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <ProfileAvatar />
      </PopoverTrigger>
      <PopoverContent className="w-40 mt-4 mr-3 p-0">
        <span className="flex items-center justify-start pl-3 font-bold py-2 border-b-2">
          Profile Actions
        </span>
        {children}
      </PopoverContent>
    </Popover>
  );
};
