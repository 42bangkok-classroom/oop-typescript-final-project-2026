## Appointment Booking System API
🚀 REST API สำหรับจัดการบริการและการจองนัดหมาย พัฒนาด้วย NestJS และ TypeScript สำหรับโปรเจค Model Set 6

## Project Information

| รายละเอียด | ข้อมูล |
|---|---|
| Model Set | 6 — Appointment Booking System
| Student ID Sum | 272046196 |
| Calculation | 272046196 mod 10 = 6 |

## Team Members

| ชื่อ-นามสกุล | GitHub | รหัสนักศึกษา |
|---|---|---|
| Saran Kongdam | `srnTone` | 68011813 |
| Supphakorn Phaefuen | `bosswanttolearn` | 68011820 | 
| Supawit Siripan | `xSolitary` | 68011827 |
| Potchara Mano | `potcharaeiei` | 68010736 |

---

## Technology Stack
| เทตโนโลยี | วัตถุประสงค์ |
|---|---|
| NestJS 10.x | Backend framework |
| TypeScript | Type-safe development |
| class-validator | Request validation |
| class-transformer | Data transformation |
| Swagger (OpenAPI) | API documentation |
| ESLint | Linting and code quality |
| JSON File Storage | File-based database |


---

## Installation and Running the Project

### 1. Clone the Repository
```bash
git clone https://github.com/srnTone/oop-typescript-final-project-2026.git
cd oop-typescript-final-project-2026

```
### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Project

Development mode:

``` bash
npm run start:dev
```

Production mode:

``` bash
npm run build
npm run start:prod
```

### 4. Access the Application

Base URL:

    http://localhost:3000/api

Swagger Documentation:

    http://localhost:3000/api/docs

------------------------------------------------------------------------

## Project Structure

```text
.
├── data/                             # โฟลเดอร์เก็บข้อมูลฐานข้อมูล (JSON Storage)
│   ├── appointments.json             # ไฟล์เก็บข้อมูลการนัดหมายทั้งหมด
│   └── services.json                 # ไฟล์เก็บข้อมูลบริการทั้งหมด
├── src/
│   ├── common/                       # โครงสร้างพื้นฐานที่ใช้งานร่วมกันทั้งระบบ
│   │   ├── interfaces/
│   │   │   └── api-response.interface.ts # กำหนดรูปแบบมาตรฐานการส่งข้อมูลกลับ (Response)
│   │   └── utils/
│   │       └── file.util.ts          # เครื่องมือสำหรับอ่านและเขียนไฟล์ JSON
│   ├── modules/
│   │   ├── appointment/              # โมดูลจัดการระบบการนัดหมาย
│   │   │   ├── dto/                  # Data Transfer Objects สำหรับรับและตรวจสอบข้อมูล
│   │   │   │   ├── create-appointment.dto.ts
│   │   │   │   └── update-appointment.dto.ts
│   │   │   ├── enums/                # ค่าคงที่สถานะต่างๆ ของการจอง
│   │   │   │   └── appointment-status.enum.ts
│   │   │   ├── interfaces/           # โครงสร้างข้อมูลภายในการนัดหมาย
│   │   │   │   └── appointment.interface.ts
│   │   │   ├── appointment.controller.ts # ส่วนรับ Request และกำหนด API Endpoints
│   │   │   ├── appointment.module.ts     # ไฟล์รวบรวมการตั้งค่าโมดูล
│   │   │   └── appointment.service.ts    # ส่วนประมวลผล Logic และการทำงานหลัก
│   │   └── service/                  # โมดูลจัดการข้อมูลบริการที่เปิดให้จอง
│   │       ├── dto/                  # DTO สำหรับจัดการข้อมูลบริการ
│   │       │   ├── create-service.dto.ts
│   │       │   └── update-service.dto.ts
│   │       ├── enums/                # สถานะการให้บริการ
│   │       │   └── service-status.enum.ts
│   │       ├── interfaces/           # โครงสร้างข้อมูลบริการ
│   │       │   └── service.interface.ts
│   │       ├── service.controller.ts  # ส่วนรับ Request สำหรับจัดการบริการ
│   │       ├── service.module.ts      # ไฟล์รวบรวมการตั้งค่าโมดูล
│   │       └── service.service.ts     # ส่วนประมวลผลข้อมูลบริการ
│   ├── app.module.ts                 # โมดูลหลักของแอปพลิเคชัน
│   └── main.ts                       # ไฟล์จุดเริ่มต้นของระบบ (Entry Point)
├── .eslintrc.js                      # การตั้งค่าสำหรับตรวจสอบคุณภาพโค้ด
├── .gitignore                        # ไฟล์ระบุรายการที่ไม่ต้องการนำขึ้น GitHub
├── package.json                      # ไฟล์จัดการ dependencies และคำสั่งการรันระบบ
├── tsconfig.json                     # การตั้งค่าการ Compile ภาษา TypeScript
└── README.md                         # เอกสารแนะนำและอธิบายรายละเอียดโปรเจค
```

---
## Core Data Models

### Service Model (11 attributes)

| Attribute | Type | Description |
|---|---|---|
| `id` | string | รหัสบริการ |
| `name` | string | ชื่อบริการ |
| `description` | string | รายละเอียดเงื่อนไข |
| `price` | number | ราคาค่าบริการ |
| `duration` | number | ระยะเวลาที่ใข่ (นาที) |
| `category` | decimal | หมวดหมู่บริการ |
| `providerName` | string | ชื่อผู้ให้บริการ |
| `status` | ServiceStatus | สถานะพร้อมให้บริการ |
| `isActive` | boolean | การแสดงผลในระบบ |
| `createdAt` | Date | วันที่สร้างข้อมูล |
| `updatedAt` | Date | วันเวลสที่แก้ไขล่าสุด |

### Apointment Model (11 Attributes)

| Attribute | Type | Description |
|---|---|---|
| `id` | string | รหัสบริการ |
| `serviceId` | string | ชื่อบริการ |
| `customerName` | string | รชื่อผู้จอง |
| `customerEmail` | string | อีเมลติดต่อ |
| `customerPhone` | string | เบอร์โทรศัพท์ |
| `appointmentDate` | Date | วันที่นัดหมาย |
| `startTime` | string | เวลาเริ่มต้น |
| `status` | AppointmentStatus | สถานะการจอง |
| `notes` | string | หมายเหตุเพิ่มเติม |
| `createdAt` | Date | วันที่สร้างข้อมูล |
| `updatedAt` | Date | วันเวลสที่แก้ไขล่าสุด |

---

## API Endpoints

### Service Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/services` | ดึงข้อมูลบริการทั้งหมด |
| `GET` | `/api/services/{id}` | ค้นหาบริการด้วย ID |
| `POST` | `/api/services` | สร้างบริการใหม่ |
| `PUT` | `/api/services/{id}` | อัปเดตข้อมูลบริการท้ังหมด |
| `PATCH` | `/api/services/{id}` | แก้ไขข้อมูลบริการบางส่วน |
| `DELETE` | `/api/services/{id}` | ลบบริการออกจากระบบ |

### Appointment Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/services` | ดึงข้อมูลการนัดหมายทั้งหมด |
| `GET` | `/api/services/{id}` | ค้นหาการนัดหมายด้วย ID |
| `POST` | `/api/services` | บันทึกการนัดหมายใหม่ |
| `PUT` | `/api/services/{id}` | อัปเดตข้อมูลนัดหมายท้ังหมด |
| `PATCH` | `/api/services/{id}` | แก้ไขข้อมูลนัดหมายบางส่วน |
| `DELETE` | `/api/services/{id}` | ลบหรือยกเลิกการนัดหมาย |

---

## Documentation Links

* [API Specification](docs/api-specification.md)
* [Data Model Documentation](docs/Data_Model_Documentation.md)
* [UML Diagram](docs/UML_Diagram.md)

---