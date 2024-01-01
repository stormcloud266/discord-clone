import { ReactNode } from "react";
import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from "lucide-react";
import { ChannelType, MemberRole } from "@prisma/client";
import { cn } from "./utils";

type RoleIconMapFunction = (classes?: string) => {
  [key in MemberRole]: ReactNode | null;
};

export const roleIconMap: RoleIconMapFunction = (classes) => ({
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className={cn("h-4 w-4 text-indigo-500", classes)} />
  ),
  [MemberRole.ADMIN]: (
    <ShieldAlert className={cn("h-4 w-4 text-rose-500", classes)} />
  ),
});

type ChannelIconMapFunction = (classes?: string) => {
  [key in ChannelType]: ReactNode | null;
};

export const channelIconMap: ChannelIconMapFunction = (classes) => ({
  [ChannelType.TEXT]: <Hash className={cn("h-4 w-4", classes)} />,
  [ChannelType.AUDIO]: <Mic className={cn("h-4 w-4", classes)} />,
  [ChannelType.VIDEO]: <Video className={cn("h-4 w-4", classes)} />,
});
