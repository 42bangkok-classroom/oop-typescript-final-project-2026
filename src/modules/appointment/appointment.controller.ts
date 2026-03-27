import { Controller, Get, Post, Put, Patch, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';
import { ApiResponse } from '../../common/interfaces/api-response.interface';
import { AppointmentModel } from './interfaces/appointment.interface';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@ApiTags('appointments') // จัดกลุ่มในหน้า API Docs
@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  @ApiOperation({ summary: 'ดึงข้อมูลการนัดหมายทั้งหมด' })
  getAll(): ApiResponse<AppointmentModel[]> {
    return {
      success: true,
      message: 'ดึงรายการนัดหมายสำเร็จ',
      data: this.appointmentService.findAll(),
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'ค้นหาการนัดหมายด้วย ID' })
  getOne(@Param('id') id: string): ApiResponse<AppointmentModel> {
    return {
      success: true,
      message: 'พบข้อมูลการนัดหมาย',
      data: this.appointmentService.findOne(id),
    };
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'บันทึกการนัดหมายใหม่' })
  create(@Body() dto: CreateAppointmentDto): ApiResponse<AppointmentModel> {
    return {
      success: true,
      message: 'บันทึกการนัดหมายเรียบร้อยแล้ว',
      data: this.appointmentService.create(dto),
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'อัปเดตข้อมูลการนัดหมายทั้งหมด' })
  updateAll(@Param('id') id: string, @Body() dto: CreateAppointmentDto): ApiResponse<AppointmentModel> {
    return {
      success: true,
      message: 'แทนที่ข้อมูลการนัดหมาย (PUT) สำเร็จ',
      data: this.appointmentService.replace(id, dto), 
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'แก้ไขข้อมูลการนัดหมายบางส่วน' })
  partialUpdate(
    @Param('id') id: string,
    @Body() dto: UpdateAppointmentDto,
  ): ApiResponse<AppointmentModel> {
    return {
      success: true,
      message: 'อัปเดตข้อมูลการนัดหมายบางส่วน (PATCH) สำเร็จ',
      data: this.appointmentService.update(id, dto), 
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ยกเลิกหรือลบการนัดหมาย' })
  delete(@Param('id') id: string): ApiResponse<null> {
    this.appointmentService.remove(id);
    return {
      success: true,
      message: 'ลบข้อมูลการนัดหมายเรียบร้อยแล้ว',
      data: null,
    };
  }
}