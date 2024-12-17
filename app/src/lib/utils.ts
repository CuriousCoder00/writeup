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