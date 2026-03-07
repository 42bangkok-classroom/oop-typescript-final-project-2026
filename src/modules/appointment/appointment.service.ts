import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { AppointmentModel } from './interfaces/appointment.interface';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentStatus } from './enums/appointment-status.enum';

@Injectable()
export class AppointmentService {
  private filePath = path.join(process.cwd(), 'data/appointments.json');

  private readData(): AppointmentModel[] {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
  }

  private writeData(data: AppointmentModel[]) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  findAll(): AppointmentModel[] {
    return this.readData();
  }

  findOne(id: string): AppointmentModel {
    const appointments = this.readData();
    const appointment = appointments.find((a) => a.id === id);
    if (!appointment) throw new NotFoundException('Appointment not found');
    return appointment;
  }

  create(dto: CreateAppointmentDto): AppointmentModel {
    const appointments = this.readData();
    const newAppointment: AppointmentModel = {
      ...dto,
      id: Date.now().toString(),
      status: dto.status || AppointmentStatus.PENDING,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as AppointmentModel;

    appointments.push(newAppointment);
    this.writeData(appointments);
    return newAppointment;
  }

  update(id: string, dto: UpdateAppointmentDto): AppointmentModel {
    const appointments = this.readData();
    const index = appointments.findIndex((a) => a.id === id);
    if (index === -1) throw new NotFoundException('Appointment not found');

    appointments[index] = {
      ...appointments[index],
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    this.writeData(appointments);
    return appointments[index];
  }

  remove(id: string): void {
    const appointments = this.readData();
    const filtered = appointments.filter((a) => a.id !== id);
    this.writeData(filtered);
  }
}
