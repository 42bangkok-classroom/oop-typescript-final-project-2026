import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceModel } from './interfaces/service.interface';
import { ServiceStatus } from './enums/service-status.enum';

@Injectable()
export class ServiceService {
  private filePath = path.join(process.cwd(), 'data/services.json');

  private readData(): ServiceModel[] {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
  }

  private writeData(data: ServiceModel[]) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  findAll(): ServiceModel[] {
    return this.readData();
  }

  findOne(id: string): ServiceModel {
    const services = this.readData();
    const service = services.find((s) => s.id === id);
    if (!service) throw new NotFoundException('Service not found'); // ป้องกัน Error 500
    return service;
  }

  create(dto: CreateServiceDto): ServiceModel {
    const services = this.readData();
    
    const newService: ServiceModel = {
      id: Date.now().toString(),
      name: dto.name,
      description: dto.description,
      price: dto.price,
      duration: dto.duration,
      category: dto.category,
      providerName: dto.providerName,
      status: dto.status || ServiceStatus.AVAILABLE,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    services.push(newService);
    this.writeData(services);
    return newService;
  }

  update(id: string, dto: UpdateServiceDto): ServiceModel {
    const services = this.readData();
    const index = services.findIndex((s) => s.id === id);
    
    if (index === -1) throw new NotFoundException('Service not found');

    services[index] = { 
      ...services[index], 
      ...dto, 
      updatedAt: new Date().toISOString() 
    };
    
    this.writeData(services);
    return services[index];
  }

  remove(id: string): void {
    const services = this.readData();
    const filtered = services.filter((s) => s.id !== id);
    this.writeData(filtered);
  }
}