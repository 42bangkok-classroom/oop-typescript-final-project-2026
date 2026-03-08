import { IsString, IsNotEmpty, IsEnum, IsDateString, IsNumber } from 'class-validator';
import { ProjectStatus } from '../project-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {

  @ApiProperty({
    example: "Project Management System",
    description: "Name of the project"
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: "A backend system for managing projects and tasks",
    description: "Short description of the project"
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    example: "active",
    description: "Status of projects"
  })
  @IsEnum(ProjectStatus)
  status!: ProjectStatus;

  @ApiProperty({
    example: "2026-01-01",
    description: "Project start date"
  })
  @IsDateString()
  startDate!: string;

  @ApiProperty({
    example: "2026-12-31",
    description: "Project deadline in ISO date format (YYYY-MM-DD)"
  })
  @IsDateString()
  deadline!: string;

  @ApiProperty({
    example: "John Doe",
    description: "Project owner"
  })
  @IsString()
  @IsNotEmpty()
  owner!: string;

  @ApiProperty({
    example: 50000,
    description: "Project budget"
  })
  @IsNumber()
  budget!: number;

  @ApiProperty({
    example: "high",
    description: "Project priority"
  })
  @IsString()
  @IsNotEmpty()
  priority!: string;

  @ApiProperty({
    example: "Software Development",
    description: "Project category"
  })
  @IsString()
  @IsNotEmpty()
  category!: string;

  @ApiProperty({
    example: "2026-03-08",
    description: "Project creation date"
  })
  @IsDateString()
  createdAt!: string;

}