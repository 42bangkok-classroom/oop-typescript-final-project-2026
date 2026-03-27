import * as fs from 'fs';// นำเข้าโมดูล 'fs' (File System) ของ Node.js ใช้สำหรับอ่านและเขียนไฟล์ในเครื่อง
import * as path from 'path';// นำเข้าโมดูล 'path' เพื่อช่วยจัดการและสร้างเส้นทางไฟล์ (File Path) ให้ถูกต้องตามระบบปฏิบัติการ

/**
   * readJsonFile: เมธอดแบบ static สำหรับอ่านไฟล์ JSON และแปลงเป็น Object
   * <T>: เป็นการใช้ Generic เพื่อบอกว่าข้อมูลที่คืนกลับมาจะมีประเภท (Type) ตามที่ผู้เรียกกำหนด
   * filePath: รับพารามิเตอร์เป็นที่อยู่ของไฟล์ที่ต้องการอ่าน
   */
export class FileUtil {
  static readJsonFile<T>(filePath: string): T {
  // สร้างเส้นทางไฟล์แบบสมบูรณ์ (Absolute Path) โดยรวมตำแหน่งโฟลเดอร์ที่รันโปรเจค (process.cwd()) เข้ากับที่อยู่ไฟล์ที่ระบุ
    const fullPath = path.join(process.cwd(), filePath);
    
    // อ่านข้อมูลจากไฟล์ตามเส้นทางที่ระบุออกมาเป็นข้อความ (String) โดยใช้การเข้ารหัสแบบ 'utf-8'
    const data = fs.readFileSync(fullPath, 'utf-8'); 
    
    // แปลงข้อความ (JSON String) ให้กลายเป็น Object ของ TypeScript ด้วย JSON.parse และระบุว่าเป็นประเภท T
    return JSON.parse(data) as T; 
  }
  
  /**
   * writeJsonFile: เมธอดแบบ static สำหรับนำข้อมูล Object ไปเขียนบันทึกลงในไฟล์ JSON
   * data: ข้อมูลประเภท T ที่ต้องการจะบันทึก
   */
  static writeJsonFile<T>(filePath: string, data: T): void {
  // สร้างเส้นทางไฟล์แบบสมบูรณ์เช่นเดียวกับตอนอ่าน เพื่อระบุตำแหน่งที่จะบันทึกไฟล์ลงไป
    const fullPath = path.join(process.cwd(), filePath);
    
    // บันทึกข้อมูลลงไฟล์ โดยแปลง Object ให้เป็นข้อความ JSON (JSON.stringify)
    // 'null, 2' หมายถึงการจัดรูปแบบข้อความให้มีการย่อหน้า (Indentation) 2 ช่องเพื่อให้คนสามารถอ่านไฟล์ได้ง่าย
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
  }
}