import { Module } from '@nestjs/common';
import { ProjectModule } from './modules/project/project.module';
import { TaskModule } from './modules/tasks/tasks.module';

@Module({
  imports: [ProjectModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

