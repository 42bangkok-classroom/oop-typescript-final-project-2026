import { IsString,IsOptional,IsEnum,IsDateString } from 'class-validator';
import { ProjectStatus } from '../project-status.enum';

export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(ProjectStatus)
  @IsOptional()
  status?: ProjectStatus;

  @IsDateString()
  @IsOptional()
  deadline?: string;
}