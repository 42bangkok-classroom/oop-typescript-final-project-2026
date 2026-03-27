import { IsString, IsNumber, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ServiceStatus } from '../enums/service-status.enum';

// โครงสร้างข้อมูลที่ใช้ในการสร้างบริการใหม่ในระบบ
export class CreateServiceDto {
  @IsString({ message: 'ชื่อบริการต้องเป็นข้อความ' })
  @IsNotEmpty({ message: 'กรุณาระบุชื่อบริการ' })
  name!: string;

  @IsString({ message: 'รายละเอียดต้องเป็นข้อความ' })
  @IsNotEmpty({ message: 'กรุณาระบุรายละเอียดบริการ' })
  description!: string;

  @IsNumber({},{ message: 'ราคาต้องเป็นตัวเลข' })
  price!: number;

  @IsNumber({},{ message: 'ระยะเวลาต้องเป็นตัวเลข' })
  duration!: number;

  @IsString({ message: 'หมวดหมู่ต้องเป็นข้อความ' })
  @IsNotEmpty({ message: 'กรุณาระบุหมวดหมู่บริการ' })
  category!: string;

  @IsString({ message: 'ชื่อผู้ให้บริการต้องเป็นข้อความ' })
  @IsNotEmpty({ message: 'กรุณาระบุชื่อผู้ให้บริการ' })
  providerName!: string;

  @IsEnum(ServiceStatus, { message: 'สถานะไม่ถูกต้อง' })
  @IsOptional()
  status?: ServiceStatus;
}