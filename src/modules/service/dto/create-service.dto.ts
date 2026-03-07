import { IsString, IsNumber, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ServiceStatus } from '../enums/service-status.enum';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  price!: number;

  @IsNumber()
  duration!: number;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsString()
  @IsNotEmpty()
  providerName!: string;

  @IsEnum(ServiceStatus)
  @IsOptional()
  status?: ServiceStatus;
}