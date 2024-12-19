import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ParamsType, QueryType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getType = (value: ParamsType | QueryType, body: any): { params?: any; query?: any } => {
  if ('params' in value) {
    return { params: body };
  } else if ('query' in value) {
    if (typeof body === "object") {
      return { query: body._id };
    } else {
      return { query: body };
    }
  }
  return {};
};

export const dateToString = (date: Date) => {
  return new Date(date).toISOString().split("T")[0];
}

export const timeAgo = (d: Date) => {
  const date = new Date(d);
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86399;
  if (interval > 1) {
    return Math.floor(interval) + " day";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}