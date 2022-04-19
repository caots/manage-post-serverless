import { gets, getById, create, update, remove } from '../function/postHandler';
import { createPostBody, createPostBodyInvalid, updatedPost } from './post.mock';

describe('get all post', () => {
  test('correctly get all post', async () => {
    const event = {};
    const res = await gets(event, null, null);
    expect(res).toBeDefined();
  });

});

describe('get post details', () => {
  test('correctly get post details', async () => {
    const event = { pathParameters: 1 };
    const res = await getById(event, null, null);
    expect(res).toBeDefined();
  });

  test('fail get post details', async () => {
    const event = { pathParameters: -1 };
    const res = await getById(event, null, null);
    expect(res).toBeDefined();
  });

});


describe('create post', () => {
  test('correctly create post', async () => {
    const event = { body: createPostBody };
    const res = await create(event, null, null);
    expect(res).toBeDefined();
  });

  test('invalid create post', async () => {
    const event = { body: createPostBodyInvalid };
    const res = await create(event, null, null);
    expect(res).toBeDefined();
  });

});

describe('update post', () => {
  test('correctly update post', async () => {
    const event = { pathParameters: { postId: "1" }, body: updatedPost };
    const res = await update(event, null, null);
    expect(res).toBeDefined();
  });

  test('fail update post', async () => {
    const event = { pathParameters: { postId: undefined }, body: createPostBodyInvalid };
    const res = await update(event, null, null);
    expect(res).toBeDefined();
  });

});

describe('Delete post', () => {
  test('correctly delete post', async () => {
    const event = { pathParameters: { postId: "1" } };
    const res = await remove(event, null, null);
    expect(res).toBeDefined();
  });

});