import { Module, forwardRef } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [forwardRef(() => ProjectModule)],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TaskModule {}