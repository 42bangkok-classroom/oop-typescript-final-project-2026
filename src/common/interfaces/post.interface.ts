import { PostStatus } from '../enums/post-status.enum';

//interface
export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  status: PostStatus;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}