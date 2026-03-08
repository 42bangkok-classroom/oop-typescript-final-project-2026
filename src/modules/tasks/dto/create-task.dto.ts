import { IsString, IsDateString, IsNumber, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task-status.enum';

export class CreateTaskDto {

  @ApiProperty({ example: "Design homepage" })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: "Create UI layout for homepage" })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({ example: "todo" })
  @IsEnum(TaskStatus)
  status!: TaskStatus;

  @ApiProperty({ example: "high" })
  @IsString()
  priority!: string;

  @ApiProperty({ example: "2026-05-01" })
  @IsDateString()
  deadline!: string;

  @ApiProperty({ example: "Alice" })
  @IsString()
  assignedTo!: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  projectId!: number;

  @ApiProperty({ example: "2026-03-08" })
  @IsDateString()
  createdAt!: string;

  @ApiProperty({ example: "2026-03-08" })
  @IsDateString()
  updatedAt!: string;

}
