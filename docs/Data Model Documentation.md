# Data Model Documentation  - Task & Project Tracking

## Overview

ระบบติดตามงานและโปรเจค

1.**Projects** - ข้อมูลของโปรเจคในระบบ 
2.**Task** - 

# Project Model

## คำอธิบาย
Project ใช้แทนข้อมูลของโปรเจคในระบบ ซึ่งเก็บรายละเอียดต่าง ๆ เช่น ชื่อโปรเจค คำอธิบาย สถานะ และวันกำหนดส่ง

## Fields

| Field | Type | คำอธิบาย |
|------|------|-----------|
| id | number | รหัสประจำโปรเจค |
| name | string | ชื่อของโปรเจค |
| description | string | รายละเอียดของโปรเจค |
| status | ProjectStatus | สถานะของโปรเจค |
| deadline | Date | วันกำหนดส่งของโปรเจค |
| createdAt | Date | วันที่สร้างโปรเจค |

## Project Status

ค่าที่สามารถใช้ได้ของสถานะโปรเจค

| ค่า | ความหมาย |
|----|-----------|
| planning | โปรเจคอยู่ในช่วงวางแผน |
| active | โปรเจคกำลังดำเนินการ |
| completed | โปรเจคเสร็จสิ้นแล้ว |
| cancelled | โปรเจคถูกยกเลิก |

## ตัวอย่างข้อมูล

```json
{
  "id": 1,
  "name": "project OOP",
  "description": "Backend API for tracking projects",
  "status": "active",
  "deadline": "2026-12-31",
  "createdAt": "2026-01-01"
}

# Task Model

## คำอธิบาย
Task ใช้แทนข้อมูลงานภายในโปรเจค โดยแต่ละงานจะเชื่อมโยงกับโปรเจคผ่าน `projectId`  
Task จะมีสถานะของงาน เช่น ยังไม่เริ่ม กำลังทำ หรือเสร็จแล้ว

---

## Fields

| Field | Type | คำอธิบาย |
|------|------|-----------|
| id | string | รหัสเฉพาะของงาน (UUID) |
| title | string | ชื่อของงาน |
| status | TaskStatus | สถานะของงาน |
| deadline | Date | วันกำหนดส่งของงาน |
| projectId | number | รหัสของโปรเจคที่งานนี้อยู่ |

---

## Task Status

ค่าที่ใช้กำหนดสถานะของงาน

| ค่า | ความหมาย |
|----|-----------|
| OPEN | งานยังไม่ได้เริ่ม |
| IN_PROGRESS | งานกำลังดำเนินการ |
| DONE | งานเสร็จสมบูรณ์ |

---

## ตัวอย่างข้อมูล

```json
{
  "id": "2",
  "title": "Login Project",
  "status": "OPEN",
  "deadline": "2026-12-20",
  "projectId": 1
}
