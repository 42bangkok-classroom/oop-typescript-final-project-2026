import { ProjectStatus } from './project-status.enum';

export interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  startDate: Date;
  deadline: Date;
  owner: string;
  budget: number;
  priority: string;
  category: string;
  createdAt: Date;
}