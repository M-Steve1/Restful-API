import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Article router', () => {
  it('Expect route displaying all articles to return 200 status code', async () => {
    const response = await request.get('/articles');
    expect(response.statusCode).toBe(200);
  });
  beforeAll(() => {
    request
    .post('/articles/create')
    .send({
      title: 'cors',
      content:
        'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
    })
    .expect(201);
  });
  it('Expect to return the specified article with 200 status code', async () => {
    const response = await request.get('/articles/1');
    expect(response.statusCode).toBe(200);
  });
  afterAll(async () => {
    const response = await request.delete('/articles/delete/1');
    expect(response.statusCode).toBe(200);
  });
});
