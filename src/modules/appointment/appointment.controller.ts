import {Controller,Get,Post,Put,Patch,Delete,Param,Body,HttpCode,} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { ApiResponse } from '../../common/interfaces/api-response.interface';
import { AppointmentModel } from './interfaces/appointment.interface';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  getAll(): ApiResponse<AppointmentModel[]> {
    return {
      success: true,
      message: 'Appointments retrieved successfully',
      data: this.appointmentService.findAll(),
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): ApiResponse<AppointmentModel> {
    return {
      success: true,
      message: 'Appointment retrieved successfully',
      data: this.appointmentService.findOne(id),
    };
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateAppointmentDto): ApiResponse<AppointmentModel> {
    return {
      success: true,
      message: 'Appointment created successfully',
      data: this.appointmentService.create(dto),
    };
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateAppointmentDto,
  ): ApiResponse<AppointmentModel> {
    return {
      success: true,
      message: 'Appointment fully updated successfully',
      data: this.appointmentService.update(id, dto),
    };
  }

  // --- ส่วนที่เพิ่มใหม่ ---
  @Patch(':id')
  partialUpdate(
    @Param('id') id: string,
    @Body() dto: UpdateAppointmentDto,
  ): ApiResponse<AppointmentModel> {
    return {
      success: true,
      message: 'Appointment partially updated successfully',
      data: this.appointmentService.update(id, dto),
    };
  }
  // ----------------------

  @Delete(':id')
  delete(@Param('id') id: string): ApiResponse<null> {
    this.appointmentService.remove(id);
    return {
      success: true,
      message: 'Appointment deleted successfully',
      data: null,
    };
  }
}