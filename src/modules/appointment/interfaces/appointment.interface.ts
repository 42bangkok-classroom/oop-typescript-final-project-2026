import { AppointmentStatus } from '../enums/appointment-status.enum';

export interface AppointmentModel {
  id: string; 
  serviceId: string;   
  customerName: string;  
  customerEmail: string;  
  customerPhone: string;   
  appointmentDate: string;  
  startTime: string;        
  status: AppointmentStatus;
  notes: string;            
  createdAt: string;        
  updatedAt: string;        
}