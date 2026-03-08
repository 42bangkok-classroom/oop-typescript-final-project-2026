import { TaskStatus } from "./task-status.enum";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: string;
  deadline: Date;
  assignedTo: string;
  projectId: number;
  createdAt: Date;
  updatedAt: Date;
}