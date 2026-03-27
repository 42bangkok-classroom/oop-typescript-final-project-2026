import { Injectable, NotFoundException } from '@nestjs/common';
import { FileUtil } from '../../common/utils/file.util'; // นำเครื่องมือจัดการไฟล์มาใช้
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceModel } from './interfaces/service.interface';
import { ServiceStatus } from './enums/service-status.enum';

@Injectable()
export class ServiceService {
  private readonly dbPath = 'data/services.json';

  findAll(): ServiceModel[] {
    return FileUtil.readJsonFile<ServiceModel[]>(this.dbPath);
  }

  findOne(id: string): ServiceModel {
    const services = this.findAll();
    const service = services.find((s) => s.id === id);
    
    if (!service) {
      throw new NotFoundException(`ไม่พบรหัสบริการ: ${id}`);
    }
    return service;
  }

  create(dto: CreateServiceDto): ServiceModel {
    const services = this.findAll();
    const newService: ServiceModel = {
      id: Date.now().toString(), // ใช้ Time Stamp เป็น ID แบบง่าย
      ...dto,
      status: dto.status || ServiceStatus.AVAILABLE,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    services.push(newService);
    FileUtil.writeJsonFile(this.dbPath, services);
    return newService;
  }

  update(id: string, dto: UpdateServiceDto): ServiceModel {
    const services = this.findAll();
    const index = services.findIndex((s) => s.id === id);
    
    if (index === -1) {
      throw new NotFoundException(`ไม่สามารถแก้ไขได้ เนื่องจากไม่พบรหัสบริการ: ${id}`);
    }

    services[index] = { 
      ...services[index], 
      ...dto, 
      updatedAt: new Date().toISOString() 
    };
    
    FileUtil.writeJsonFile(this.dbPath, services);
    return services[index];
  }
  
  replace(id: string, dto: CreateServiceDto): ServiceModel {
    const services = this.findAll();
    const index = services.findIndex((s) => s.id === id);
    
    if (index === -1) {
      throw new NotFoundException(`ไม่สามารถแทนที่ได้ เนื่องจากไม่พบรหัสบริการ: ${id}`);
    }

    const existing = services[index];
    const replacedService: ServiceModel = {
      id: existing.id,
      ...dto,
      status: dto.status || ServiceStatus.AVAILABLE,
      isActive: existing.isActive, // คงสถานะเดิมไว้หรือกำหนดค่าเริ่มต้นใหม่
      createdAt: existing.createdAt,
      updatedAt: new Date().toISOString(),
    };

    services[index] = replacedService;
    FileUtil.writeJsonFile(this.dbPath, services);
    return replacedService;
  }

  remove(id: string): void {
    const services = this.findAll();
    // ตรวจสอบก่อนว่ามีข้อมูลจริงไหมเพื่อความปลอดภัย
    this.findOne(id);
    
    const filtered = services.filter((s) => s.id !== id);
    FileUtil.writeJsonFile(this.dbPath, filtered);
  }
}