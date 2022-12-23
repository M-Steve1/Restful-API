import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

fdescribe('Testing article routers', () => {
  it('Expect route displaying all articles to return 200 status code', async () => {
    const response = await request.get('/articles');
    expect(response.statusCode).toBe(200);
  });
  it('Expect to create a new article with 201 status code', async () => {
    const response = await request.post('/articles/create');
    expect(response.statusCode).toBe(201);
  });
  it('Expect to return the specified article with 200 status code', async () => {
    const response = await request.get('/articles/1');
    expect(response.statusCode).toBe(200);
  });
  it('Expect to delete the specified article with 200 status code', async () => {
    const response = await request.delete('/articles/delete/2');
    expect(response.statusCode).toBe(200);
  });
});
