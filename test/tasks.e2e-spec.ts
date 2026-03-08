import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Tasks E2E', () => {
  let app: INestApplication;
  let projectId: number;
  let taskId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const project = await request(app.getHttpServer())
      .post('/projects')
      .send({
        name: 'Task Test Project',
        description: 'for task',
        status: 'planning',
        deadline: '2030-12-31'
      });

    projectId = project.body.data.id;
  });

  afterAll(async () => {
    await app.close();
  });

  it('Create Task', async () => {
    const res = await request(app.getHttpServer())
      .post('/tasks')
      .send({
        title: 'Task 1',
        deadline: '2030-01-01',
        projectId: projectId
      });

    expect(res.status).toBe(201);

    taskId = res.body.id;
  });

  it('Get All Tasks', async () => {
    const res = await request(app.getHttpServer())
      .get('/tasks');

    expect(res.status).toBe(200);
  });

  it('Get Task by id', async () => {
    const res = await request(app.getHttpServer())
      .get(`/tasks/${taskId}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(taskId);
  });

  it('Update Task', async () => {
    const res = await request(app.getHttpServer())
      .put(`/tasks/${taskId}`)
      .send({
        title: 'Updated Task'
      });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated Task');
  });

  it('Patch Task', async () => {
    const res = await request(app.getHttpServer())
      .patch(`/tasks/${taskId}`)
      .send({
        status: 'IN_PROGRESS'
      });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('IN_PROGRESS');
  });

  it('Delete Task', async () => {
    const res = await request(app.getHttpServer())
      .delete(`/tasks/${taskId}`);

    expect(res.status).toBe(200);
  });
});