import { ServiceStatus } from '../enums/service-status.enum';

// โครงสร้างข้อมูลของ Service ที่ใช้ในระบบ
export interface ServiceModel {
  id: string;             // รหัสบริการ
  name: string;           // ชื่อบริการ
  description: string;    // รายละเอียดบริการ
  price: number;          // ราคาบริการ
  duration: number;       // ระยะเวลาในการให้บริการ
  category: string;       // หมวดหมู่บริการ
  status: ServiceStatus;  // สถานะบริการ
  isActive: boolean;      // สถานะการใช้งาน
  providerName: string;   // ชื่อผู้ให้บริการ
  createdAt: string;      // วันที่สร้าง
  updatedAt: string;      // วันที่อัปเดต
}