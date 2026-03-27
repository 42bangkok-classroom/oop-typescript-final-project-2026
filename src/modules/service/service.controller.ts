import { Controller, Get, Put, Post, Body, Param, Patch, Delete, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ServiceService } from './service.service';
import { ServiceModel } from './interfaces/service.interface';
import { ApiResponse } from '../../common/interfaces/api-response.interface';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@ApiTags('services') // จัดกลุ่ม API ในหน้า Swagger
@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  @ApiOperation({ summary: 'ดึงข้อมูลบริการทั้งหมด' })
  findAll(): ApiResponse<ServiceModel[]> {
    return {
      success: true,
      message: 'ดึงข้อมูลรายการบริการสำเร็จ',
      data: this.serviceService.findAll(),
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'ค้นหาบริการด้วยรหัส ID' })
  findOne(@Param('id') id: string): ApiResponse<ServiceModel> {
    return {
      success: true,
      message: 'พบข้อมูลบริการ',
      data: this.serviceService.findOne(id),
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'อัปเดตข้อมูลบริการทั้งหมด' })
  updateAll(@Param('id') id: string, @Body() dto: CreateServiceDto): ApiResponse<ServiceModel> {
    return {
      success: true,
      message: 'แทนที่ข้อมูลบริการ (PUT) สำเร็จ',
      data: this.serviceService.replace(id, dto), 
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'แก้ไขข้อมูลบริการบางส่วน' })
  update(@Param('id') id: string, @Body() dto: UpdateServiceDto): ApiResponse<ServiceModel> {
    return {
      success: true,
      message: 'อัปเดตข้อมูลบริการบางส่วน (PATCH) สำเร็จ',
      data: this.serviceService.update(id, dto), 
    };
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'สร้างรายการบริการใหม่' })
  create(@Body() dto: CreateServiceDto): ApiResponse<ServiceModel> {
    return {
      success: true,
      message: 'สร้างบริการใหม่เรียบร้อยแล้ว',
      data: this.serviceService.create(dto),
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ลบรายการบริการ' })
  remove(@Param('id') id: string): ApiResponse<null> {
    this.serviceService.remove(id);
    return {
      success: true,
      message: 'ลบข้อมูลบริการเรียบร้อยแล้ว',
      data: null,
    };
  }
}