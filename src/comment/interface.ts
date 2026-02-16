export interface Comment {
  id: number;
  message: string;
  authorName: string;
  postId: string;
  createdAt: Date; 
  updatedAt: Date;
}