export interface Post {
  postId: string;
  title?: string;
  description?: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface RequestPost {
  limit: number;
  next: string;
  title: string;
}