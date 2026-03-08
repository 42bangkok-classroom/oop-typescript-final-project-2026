import { IsOptional, IsString, IsEnum, IsDateString, IsNumber } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {

  @ApiPropertyOptional({
    example: "Update homepage design",
    description: "Updated task title"
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    example: "Update UI layout",
    description: "Updated task description"
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    enum: TaskStatus,
    example: TaskStatus.OPEN,
    description: "Task status"
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiPropertyOptional({
    example: "high",
    description: "Task priority"
  })
  @IsOptional()
  @IsString()
  priority?: string;

  @ApiPropertyOptional({
    example: "2026-05-01",
    description: "Updated deadline"
  })
  @IsOptional()
  @IsDateString()
  deadline?: string;

  @ApiPropertyOptional({
    example: "Alice",
    description: "Person assigned to task"
  })
  @IsOptional()
  @IsString()
  assignedTo?: string;

  @ApiPropertyOptional({
    example: 1,
    description: "Project ID"
  })
  @IsOptional()
  @IsNumber()
  projectId?: number;

  @ApiPropertyOptional({
    example: "2026-03-08",
    description: "Created date"
  })
  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @ApiPropertyOptional({
    example: "2026-03-08",
    description: "Updated date"
  })
  @IsOptional()
  @IsDateString()
  updatedAt?: string;

}