import { ArticleStore } from '../../models/article';

const store = new ArticleStore();

describe('Article model', () => {
  it('Should have an index method', () => {
    expect(store.index).toBeDefined();
  });
  it('Should have create method', () => {
    expect(store.create).toBeDefined();
  });
  it('Should have show method', () => {
    expect(store.show).toBeDefined();
  });
  it('Should have delete method', () => {
    expect(store.delete).toBeDefined();
  });

  it('Create method should add a new article', async () => {
    const result = await store.create({
      title: 'cors',
      content:
        'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
    });
    expect(result).toEqual({
      id: 1,
      title: 'cors',
      content:
        'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
    });
  });
  it('Should return a list all articles', async () => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 1,
        title: 'cors',
        content:
          'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
      }
    ]);
  });
  it('Should find article by ID', async () => {
    const result = await store.show(1);
    expect(result).toEqual({
      id: 1,
      title: 'cors',
      content:
        'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
    });
  });
  it('Should delete article with the ID provided', async () => {
    const result = await store.delete(3);
    expect(result).toEqual({
      id: 3,
      title: 'cors',
      content:
        'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
    });
  });
});
