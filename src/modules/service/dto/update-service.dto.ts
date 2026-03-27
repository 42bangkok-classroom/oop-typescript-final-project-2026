import { PartialType } from '@nestjs/swagger';
import { CreateServiceDto } from './create-service.dto';

// ข้อกำหนดการรับข้อมูลสำหรับการแก้ไขบริการ คุณสมบัติมาจาก CreateServiceDto แต่ปรับให้ทุกฟิลด์เป็น Optional
export class UpdateServiceDto extends PartialType(CreateServiceDto) {}