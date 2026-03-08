import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  Query
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: 'Create new task' })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Tasks retrieved successfully' })
  @Get()
  getTasks(@Query('projectId') projectId?: string) {

    const projectIdNumber = projectId ? Number(projectId) : undefined;

    return this.tasksService.getAllTasks(projectIdNumber);
  }

  @ApiOperation({ summary: 'Get task by id' })
  @ApiResponse({ status: 200, description: 'Task retrieved successfully' })
  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @ApiOperation({ summary: 'Update task fully' })
  @Put(':id')
  updateTask(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.updateTask(id, dto);
  }

  @ApiOperation({ summary: 'Update task partially' })
  @Patch(':id')
  patchTask(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.patchTask(id, dto);
  }

  @ApiOperation({ summary: 'Delete task by id' })
  @Delete(':id')
  deleteTask(@Param('id') id: string) {

    this.tasksService.deleteTask(id);

    return {
      success: true,
      message: 'Task deleted successfully'
    };
  }

}