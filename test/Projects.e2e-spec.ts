import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Project E2E', () => {
  let app: INestApplication;
  let projectId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Create Project', async () => {
    const res = await request(app.getHttpServer())
      .post('/projects')
      .send({
        name: 'Test Project',
        description: 'Project testing',
        status: 'planning',
        deadline: '2030-12-31'
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);

    projectId = res.body.data.id;
  });

  it('Get All Projects', async () => {
    const res = await request(app.getHttpServer())
      .get('/projects');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it('Get Project by id', async () => {
    const res = await request(app.getHttpServer())
      .get(`/projects/${projectId}`);

    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(projectId);
  });

  it('Update Project', async () => {
    const res = await request(app.getHttpServer())
      .put(`/projects/${projectId}`)
      .send({
        name: 'Updated Project',
        description: 'Updated',
        status: 'active',
        deadline: '2030-11-11'
      });

    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe('Updated Project');
  });

  it('Patch Project', async () => {
    const res = await request(app.getHttpServer())
      .patch(`/projects/${projectId}`)
      .send({
        name: 'Patched Project'
      });

    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe('Patched Project');
  });

  it('Delete Project', async () => {
    const res = await request(app.getHttpServer())
      .delete(`/projects/${projectId}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
});