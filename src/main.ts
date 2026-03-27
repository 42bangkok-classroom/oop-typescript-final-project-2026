import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Setting Global Prefix ให้ตรงตาม API Specification
  app.setGlobalPrefix('api'); // เพิ่มบรรทัดนี้เพื่อให้ Base URL เป็น /api

  // 2. Enable CORS เพื่อให้ Frontend เรียกใช้งานได้
  app.enableCors(); 

  // 3. Enable ValidationPipe สำหรับตรวจสอบข้อมูล (DTO)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // 4. Setting Swagger API Documentation
  const config = new DocumentBuilder()
    .setTitle('Appointment Booking System API')
    .setDescription('The API documentation for the final project')
    .setVersion('1.0')
    .addTag('appointments')
    .addTag('services')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  // ตั้งค่าที่ 'docs' เพราะมี Global Prefix เป็น 'api' อยู่แล้ว 
  // จะทำให้เข้าถึงได้ที่ http://localhost:3000/api/docs
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/api`);
}

bootstrap();