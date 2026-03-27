import { AppointmentStatus } from '../enums/appointment-status.enum';

// โครงสร้างข้อมูลการนัดหมาย
export interface AppointmentModel {
  id: string;               // รหัสนัดหมายการจอง
  serviceId: string;        // รหัสบริการที่ถูกจอง
  customerName: string;     // ชื่อลูกค้า
  customerEmail: string;    // อีเมลลูกค้า
  customerPhone: string;    // เบอร์โทรลูกค้า
  appointmentDate: string;  // วันที่นัดหมาย
  startTime: string;        // เวลานัดหมายเริ่มต้น
  status: AppointmentStatus;// สถานะของนัดหมาย
  notes: string;            // หมายเหตุเพิ่มเติม
  createdAt: string;        // เวลาที่สร้างนัดหมาย
  updatedAt: string;        // เวลาที่แก้ไขนัดหมายล่าสุด
}