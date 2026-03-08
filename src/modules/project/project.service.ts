import { Injectable,BadRequestException,NotFoundException,forwardRef,Inject } from '@nestjs/common';
import { Project } from './project.interface';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
//import { TasksService } from '../tasks/tasks.service';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];
  private nextId = 1;
  /*constructor(
  @Inject(forwardRef(() => TasksService))
  private readonly tasksService: TasksService
  ) {}*/

  create(dto: CreateProjectDto): Project {
    const deadlineDate = new Date(dto.deadline);

    if (deadlineDate < new Date()) {
      throw new BadRequestException('Deadline cannot be in the past');
    }

    const newProject: Project = {
  id: this.nextId++,
  name: dto.name,
  description: dto.description,
  status: dto.status,
  startDate: new Date(dto.startDate),
  deadline: deadlineDate,
  owner: dto.owner,
  budget: dto.budget,
  priority: dto.priority,
  category: dto.category,
  createdAt: new Date(dto.createdAt),
};

    this.projects.push(newProject);
    return newProject;
  }

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: number): Project {
    const project = this.projects.find((p) => p.id === id);

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }

  update(id: number, dto: CreateProjectDto): Project {
    const project = this.findOne(id);

    const deadlineDate = new Date(dto.deadline);

    if (deadlineDate < new Date()) {
      throw new BadRequestException('Deadline cannot be in the past');
    }

    project.name = dto.name;
    project.description = dto.description;
    project.status = dto.status;
    project.startDate = new Date(dto.startDate);
    project.deadline = deadlineDate;
    project.owner = dto.owner;
    project.budget = dto.budget;
    project.priority = dto.priority;
    project.category = dto.category;

    return project;
  }

  remove(id: number) {

    const index = this.projects.findIndex(p => p.id === id);

    if (index === -1) {
      throw new NotFoundException('Project not found');
    }

    this.projects.splice(index, 1);

    return {
      message: 'Project deleted successfully'
    };
  }

  patch(id: number, dto: UpdateProjectDto): Project {
  const project = this.findOne(id);

  if (dto.deadline) {
    const deadlineDate = new Date(dto.deadline);

    if (deadlineDate < new Date()) {
      throw new BadRequestException(
        'Deadline cannot be in the past',
      );
    }

    project.deadline = deadlineDate;}

      if (dto.name !== undefined) {
        project.name = dto.name;
      }

      if (dto.description !== undefined) {
        project.description = dto.description;
      }

      if (dto.status !== undefined) {
        project.status = dto.status;
      }

      
    return project;
  }
  getProjectById(id: number): Project {

    const project = this.projects.find(p => p.id === id);

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }
}

