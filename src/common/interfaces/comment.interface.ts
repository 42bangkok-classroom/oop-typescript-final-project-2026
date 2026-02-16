//interface
export interface Comment {
    id: string;
    postId: string;
    author: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }