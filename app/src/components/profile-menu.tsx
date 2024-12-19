import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ProfileAvatar = () => {
  return (
    <Avatar>
      <AvatarFallback nonce="John"></AvatarFallback>
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
        <span className="flex items-center justify-start pl-3 font-bold py-2 border-b-2">Profile Actions</span>
        {children}
      </PopoverContent>
    </Popover>
  );
};
