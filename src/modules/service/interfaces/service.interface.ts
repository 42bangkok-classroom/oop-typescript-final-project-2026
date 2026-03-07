import { ServiceStatus } from '../enums/service-status.enum';

export interface ServiceModel {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  status: ServiceStatus;
  isActive: boolean;
  providerName: string;
  createdAt: string;
  updatedAt: string;
}