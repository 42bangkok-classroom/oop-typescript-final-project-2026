import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Task } from './task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { v4 as uuid } from 'uuid';
import { ProjectService } from '../project/project.service';

@Injectable()
export class TasksService {

  private tasks: Task[] = [];

  constructor(private projectService: ProjectService) {}

  findByProjectId(projectId: number): Task[] {
    return this.tasks.filter(task => task.projectId === projectId);
  }

  getAllTasks(projectId?: number): Task[] {

    if (projectId !== undefined) {
      return this.tasks.filter(task => task.projectId === projectId);
    }

    return this.tasks;
  }

  getTaskById(id: string): Task {

    const task = this.tasks.find(t => t.id === id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  createTask(dto: CreateTaskDto): Task {

    const project = this.projectService.getProjectById(dto.projectId);

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    const deadline = new Date(dto.deadline);

    if (isNaN(deadline.getTime())) {
      throw new BadRequestException('Invalid deadline');
    }

    if (deadline > project.deadline) {
      throw new BadRequestException(
        'Task deadline cannot be later than project deadline'
      );
    }

    const task: Task = {
      id: uuid(),
      title: dto.title,
      description: dto.description,
      status: dto.status,
      priority: dto.priority,
      deadline: deadline,
      assignedTo: dto.assignedTo,
      projectId: dto.projectId,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    };

    this.tasks.push(task);

    return task;
  }

  updateTask(id: string, dto: UpdateTaskDto): Task {

    const task = this.getTaskById(id);

    if (dto.title !== undefined) {
      task.title = dto.title;
    }

    if (dto.description !== undefined) {
      task.description = dto.description;
    }

    if (dto.priority !== undefined) {
      task.priority = dto.priority;
    }

    if (dto.assignedTo !== undefined) {
      task.assignedTo = dto.assignedTo;
    }

    if (dto.deadline !== undefined) {

      const deadline = new Date(dto.deadline);

      if (isNaN(deadline.getTime())) {
        throw new BadRequestException('Invalid deadline');
      }

      const project = this.projectService.getProjectById(task.projectId);

      if (deadline > project.deadline) {
        throw new BadRequestException(
          'Task deadline cannot be later than project deadline'
        );
      }

      task.deadline = deadline;
    }

    if (dto.status !== undefined) {
      task.status = dto.status;
    }

    task.updatedAt = new Date();

    return task;
  }

  patchTask(id: string, dto: UpdateTaskDto): Task {

    const task = this.getTaskById(id);

    if (dto.title !== undefined) {
      task.title = dto.title;
    }

    if (dto.description !== undefined) {
      task.description = dto.description;
    }

    if (dto.priority !== undefined) {
      task.priority = dto.priority;
    }

    if (dto.assignedTo !== undefined) {
      task.assignedTo = dto.assignedTo;
    }

    if (dto.deadline !== undefined) {

      const deadline = new Date(dto.deadline);

      if (isNaN(deadline.getTime())) {
        throw new BadRequestException('Invalid deadline');
      }

      const project = this.projectService.getProjectById(task.projectId);

      if (deadline > project.deadline) {
        throw new BadRequestException(
          'Task deadline cannot be later than project deadline'
        );
      }

      task.deadline = deadline;
    }

    if (dto.status !== undefined) {
      task.status = dto.status;
    }

    task.updatedAt = new Date();

    return task;
  }

  deleteTask(id: string): void {

    const task = this.getTaskById(id);

    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}