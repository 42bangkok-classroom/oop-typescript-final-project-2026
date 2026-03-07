import { Controller, Get, Put, Post, Body, Param, Patch, Delete, HttpCode } from '@nestjs/common';
import { ServiceModel } from './interfaces/service.interface';
import { ApiResponse } from '../../common/interfaces/api-response.interface';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  findAll(): ApiResponse<ServiceModel[]> {
    return {
      success: true,
      message: 'Services retrieved successfully',
      data: this.serviceService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string): ApiResponse<ServiceModel> {
    const data = this.serviceService.findOne(id);
    return {
      success: true,
      message: data ? 'Service found' : 'Service not found',
      data: data || null,
    };
  }

  @Put(':id')
  updateFull(@Param('id') id: string, @Body() dto: UpdateServiceDto): ApiResponse<ServiceModel> {
    return {
      success: true,
      message: 'Service fully updated successfully',
      data: this.serviceService.update(id, dto),
    };
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateServiceDto): ApiResponse<ServiceModel> {
    return {
      success: true,
      message: 'Service created successfully',
      data: this.serviceService.create(dto),
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateServiceDto): ApiResponse<ServiceModel> {
    return {
      success: true,
      message: 'Service updated successfully',
      data: this.serviceService.update(id, dto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string): ApiResponse<null> {
    this.serviceService.remove(id);
    return {
      success: true,
      message: 'Service deleted successfully',
      data: null,
    };
  }
} // ปิดคลาสที่ตำแหน่งนี้เพียงครั้งเดียว