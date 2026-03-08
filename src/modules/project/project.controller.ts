import { Controller,Get,Post,Put,Delete,Param,Body,Patch,ParseIntPipe,BadRequestException } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ApiResponse } from '../../common/interfaces/api-response.interface';
import { Project } from './project.interface';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse as SwaggerApiResponse,ApiOperation } from '@nestjs/swagger';
import { TasksService } from '../tasks/tasks.service';


@ApiTags('projects')
@Controller('projects')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly tasksService: TasksService,
  ) {}

  @ApiOperation({ summary: 'Create new projects' })
  @SwaggerApiResponse({ status: 201, description: 'Project created successfully' })
  @Post()
  create(@Body() dto: CreateProjectDto): ApiResponse<Project> {
    const project = this.projectService.create(dto);

    return {
      success: true,
      message: 'Project created successfully',
      data: project,
    };
  }

  @ApiOperation({ summary: 'Get all projects' })
  @SwaggerApiResponse({ status: 200, description: 'Projects retrieved successfully' })
  @Get()
  findAll(): ApiResponse<Project[]> {
    return {
      success: true,
      message: 'Projects retrieved successfully',
      data: this.projectService.findAll(),
    };
  }

  @ApiOperation({ summary: 'Get project by id' })
  @SwaggerApiResponse({ status: 200, description: 'Project retrieved successfully' })
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): ApiResponse<Project> {
    return {
      success: true,
      message: 'Project retrieved successfully',
      data: this.projectService.findOne(id),
    };
  }

  @ApiOperation({ summary: 'Put project by id' })
  @SwaggerApiResponse({ status: 200, description: 'Project updated successfully' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateProjectDto,
  ): ApiResponse<Project> {
    return {
      success: true,
      message: 'Project updated successfully',
      data: this.projectService.update(id, dto),
    };
  }
   
  @ApiOperation({ summary: 'Patch project by id' })
  @SwaggerApiResponse({ status: 200, description: 'Project updated partially' })
  @Patch(':id')
    patch(
     @Param('id', ParseIntPipe) id: number,
     @Body() dto: UpdateProjectDto,
    ): ApiResponse<Project> {
    return {
        success: true,
        message: 'Project updated partially',
        data: this.projectService.patch(id, dto),
      };
  }

  @ApiOperation({ summary: 'Delete project by id' })
  @SwaggerApiResponse({ status: 200, description: 'Project deleted successfully' })
  @Delete(':id')
  remove(@Param('id') id: string) {

    const tasks = this.tasksService.findByProjectId(Number(id));

    if (tasks.length > 0) {
      throw new BadRequestException(
        'Cannot delete project with existing tasks'
      );
    }

    return this.projectService.remove(Number(id));
  }


  
}