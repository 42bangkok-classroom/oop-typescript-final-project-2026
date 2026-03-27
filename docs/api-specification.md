1. Overview

เอกสารฉบับนี้อธิบายรายละเอียดของ RESTful API สำหรับระบบ Appointment Booking System
พัฒนาด้วย NestJS Framework และใช้ Swagger (OpenAPI) สำหรับจัดทำเอกสาร API

Base URL
/api

Swagger Documentation
/api/docs

2. Standard Response Format

API ทุก Endpoint ใช้มาตรฐานการตอบกลับแบบเดียวกัน ดังนี้:

ApiResponse

success : boolean

message : string

data : object หรือ null

ตัวอย่าง Success Response

{
"success": true,
"message": "ดำเนินการสำเร็จ",
"data": {}
}

ตัวอย่าง Error Response

{
"statusCode": 404,
"message": "ไม่พบข้อมูล",
"error": "Not Found"
}

3. Service APIs
Service Model

id (string)
รหัสบริการที่ไม่ซ้ำกัน

name (string)
ชื่อบริการ

description (string)
รายละเอียดบริการ

price (number)
ราคาค่าบริการ

duration (number)
ระยะเวลาให้บริการ (นาที)

category (string)
หมวดหมู่บริการ

providerName (string)
ชื่อผู้ให้บริการ

status (ServiceStatus)
สถานะของบริการ

isActive (boolean)
กำหนดการแสดงผลในระบบ

createdAt (string)
วันเวลาที่สร้างข้อมูล

updatedAt (string)
วันเวลาที่แก้ไขล่าสุด

ServiceStatus มีค่าได้ดังนี้:

AVAILABLE

UNAVAILABLE

MAINTENANCE

HIDDEN

Service Endpoints

GET /api/services
ดึงข้อมูลบริการทั้งหมด

GET /api/services/{id}
ดึงข้อมูลบริการตามรหัส

POST /api/services
สร้างบริการใหม่

PUT /api/services/{id}
อัปเดตข้อมูลบริการทั้งหมด

PATCH /api/services/{id}
แก้ไขข้อมูลบางส่วนของบริการ

DELETE /api/services/{id}
ลบบริการออกจากระบบ

4. Appointment APIs
Appointment Model

id (string)
รหัสการนัดหมาย

serviceId (string)
รหัสบริการที่จอง

customerName (string)
ชื่อลูกค้า

customerEmail (string)
อีเมลลูกค้า

customerPhone (string)
เบอร์โทรศัพท์

appointmentDate (string)
วันที่เข้ารับบริการ

startTime (string)
เวลาเริ่มต้น

status (AppointmentStatus)
สถานะการนัดหมาย

notes (string)
หมายเหตุเพิ่มเติม

createdAt (string)
วันที่สร้างรายการ

updatedAt (string)
วันที่แก้ไขล่าสุด

AppointmentStatus มีค่าได้ดังนี้:

PENDING

CONFIRMED

CANCELLED

COMPLETED

Appointment Endpoints

GET /api/appointments
ดึงข้อมูลการนัดหมายทั้งหมด

GET /api/appointments/{id}
ดึงข้อมูลการนัดหมายตามรหัส

POST /api/appointments
สร้างรายการนัดหมายใหม่

PUT /api/appointments/{id}
อัปเดตข้อมูลการนัดหมายทั้งหมด

PATCH /api/appointments/{id}
แก้ไขข้อมูลบางส่วนของการนัดหมาย

DELETE /api/appointments/{id}
ลบหรือยกเลิกการนัดหมาย
