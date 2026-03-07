import { Module } from '@nestjs/common';
import { ServiceModule } from './modules/service/service.module';
import { AppointmentModule } from './modules/appointment/appointment.module';

@Module({
  imports: [ServiceModule, AppointmentModule],
})
export class AppModule {}