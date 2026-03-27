// โครงสร้างมาตรฐานสำหรับการตอบกลับ API 
export interface ApiResponse<T> {
  success: boolean; // สถานะงาน
  message: string;  // ข้อความผลลัพธ์
  data: T | null;   // ข้อมูลส่งกลับผู้ใช้ ไม่มีส่ง null
}