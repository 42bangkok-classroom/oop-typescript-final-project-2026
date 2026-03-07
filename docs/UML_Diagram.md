``` mermaid
classDiagram
    direction TB

    class ApiResponse {
        <<interface>>
        +success: boolean
        +message: string
        +data: T
        +timestamp: date
    }

    class ServiceStatus {
        <<enumeration>>
        AVAILABLE
        UNAVAILABLE
        MAINTENANCE
    }

    class AppointmentStatus {
        <<enumeration>>
        PENDING
        CONFIRMED
        CANCELLED
        COMPLETED
    }

    class Service {
        +id: string
        +name: string
        +description: string
        +price: number
        +durationMinutes: number
        +status: ServiceStatus 
        +category: string
        +isActive: boolean
        +createdAt: date
        +updatedAt: date
    }

    class Appointment {
        +id: string
        +serviceId: string
        +customerName: string
        +customerEmail: string
        +customerPhone: string
        +appointmentDate: date
        +startTime: string
        +endTime: string
        +status: AppointmentStatus 
        +notes: string
        +createdAt: date
        +updateAt: date 
    }

    class ServicesController {
        +create(CreateServiceDto) ApiResponse
        +findAll() ApiResponse
        +findOne(id) ApiResponse
        +update(id, UpdateServiceDto) ApiResponse
        +remove(id) ApiResponse
    }

    class AppointmentsController {
        +create(CreateAppointmentDto) ApiResponse
        +findAll() ApiResponse
        +findOne(id) ApiResponse
        +update(id, UpdateAppointmentDto) ApiResponse
        +remove(id) ApiResponse
    }

    class ServicesService {
        +create(CreateServiceDto) Service
        +findAll() List~Service~
        +findOne(id) Service
        +update(id, UpdateServiceDto) Service
        +remove(id) void
    }

    class AppointmentsService {
        +create(CreateAppointmentDto) Appointment
        +findAll() List~Appointment~
        +findOne(id) Appointment
        +update(id, UpdateAppointmentDto) Appointment
        +remove(id) void
    }

    ServicesController --> ServicesService : calls
    AppointmentsController --> AppointmentsService : calls
    
    ServicesService "1" *-- "*" Service : manages
    AppointmentsService "1" *-- "*" Appointment : manages
    
    Appointment "*" --> "1" Service : references serviceId
    
    ServicesController ..> ApiResponse : formats
    AppointmentsController ..> ApiResponse : formats
```