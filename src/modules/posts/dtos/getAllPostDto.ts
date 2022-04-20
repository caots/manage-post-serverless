import { Post } from "../model/Post";

export interface ResponseListPost {
  data: any[];
  next: string;
  limit: number;
}