import { gets, getById, create, update, remove } from '../../function/postHandler';
jest.mock('../../service', () => ({ 
  getAllPosts: jest.fn(),
  getPost: jest.fn(),
  createPost: jest.fn(),
  updatePost: jest.fn(),
  deletePost: jest.fn(),
}));

describe('get all post handler', () => {
  test('correctly get all post', () => {
    const event = {};
    const res = gets(event, null, null);
    expect(res).toBeDefined();
  });

});

describe('get post details handler', () => {
  test('correctly get post details', () => {
    const event = {};
    const res = getById(event, null, null);
    expect(res).toBeDefined();
  });
});

describe('create post handler', () => {
  test('correctly create post', () => {
    const event = {};
    const res = create(event, null, null);
    expect(res).toBeDefined();
  });

});

describe('update post handler', () => {
  test('correctly update post handler', () => {
    const event = {};
    const res = update(event, null, null);
    expect(res).toBeDefined();
  });
});

describe('Delete post handler', () => {
  test('correctly delete post handler', () => {
    const event = {};
    const res = remove(event, null, null);
    expect(res).toBeDefined();
  });

});