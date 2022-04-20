import PostController from '../../controller/postController';
import { createPostBody, getAllPost, updatedPost } from '../mock/post.mock';
jest.mock('../../service', () => ({
  getAllPosts: jest.fn(),
  getPost: jest.fn(),
  createPost: jest.fn(),
  updatePost: jest.fn(),
  deletePost: jest.fn(),
}));

describe('get all post controller', () => {
  it('should return the list of posts', () => {
    const postController = new PostController()
    const result = postController.gets({}, null)
    expect(result).toBeDefined()
  })
  it('should return error', () => {
    const postController = new PostController()
    const result = postController.gets({}, null)
      .catch((error) => {
        expect(error).toBeDefined();
      });
  })
})

describe('get post controller', () => {
  it('should return the post', () => {
    const postController = new PostController()
    const result = postController.getById({}, null)
    expect(result).toBeDefined()
  })
  it('should return error', () => {
    const postController = new PostController()
    const result = postController.getById({}, null)
      .catch((error) => {
        expect(error).toBeDefined();
      });
  })
})

describe('create post controller', () => {

  createPostBody.forEach((caseValue) => {
    it(caseValue.title, () => {
      const postController = new PostController()
      const event = { body: caseValue.data }
      const result = postController.create(event, null)
      expect(result).toBeDefined()
    });
  });

  it('should return error', () => {
    const postController = new PostController()
    const result = postController.create({}, null)
      .catch((error) => {
        expect(error).toBeDefined();
      });
  })
})

describe('update post controller', () => {
  it('should return update post', () => {
    const postController = new PostController()
    const result = postController.update(updatedPost, null)
    expect(result).toBeDefined()
  })
  it('should return error', () => {
    const postController = new PostController()
    const result = postController.update({}, null)
      .catch((error) => {
        expect(error).toBeDefined();
      });
  })
})


describe('delete post controller', () => {
  it('should return delete post', () => {
    const postController = new PostController()
    const result = postController.delete({ pathParameters: 123 }, null)
    expect(result).toBeDefined()
  })
  it('should return error', () => {
    const postController = new PostController()
    const result = postController.delete({}, null)
      .catch((error) => {
        expect(error).toBeDefined();
      });
  })
})
