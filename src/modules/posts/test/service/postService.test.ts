import PostService from '../../service/postService';
import { createPost, ParamsGetAllPostService, updatedPost } from '../mock/post.mock';

describe('get all post service', () => {

  ParamsGetAllPostService.forEach((caseValue) => {
    it(caseValue.title, () => {
      const postService = new PostService(null, "tableName")
      const params = caseValue.params
      const result = postService.getAllPosts(params)
      expect(result).toBeDefined()
    });
  });
})

describe('get post service', () => {
  it("Get Post by null id", () => {
    const postService = new PostService(null, "tableName")
    const result = postService.getPost("")
    expect(result).toBeDefined()
  });

  it("Get Post by id", () => {
    const postService = new PostService(null, "tableName")
    const result = postService.getPost("abc")
    expect(result).toBeDefined()
  });
})

describe('create post service', () => {
  it("Create Post by null data", () => {
    const postService = new PostService(null, "tableName")
    const result = postService.createPost(null)
    expect(result).toBeDefined()
  });

  it("Create Post with data", () => {
    const postService = new PostService(null, "tableName")
    const result = postService.createPost(createPost)
    expect(result).toBeDefined()
  });
})

describe('Update post service', () => {
  it("Update Post by null data", () => {
    const postService = new PostService(null, "tableName")
    const result = postService.updatePost("", null)
    expect(result).toBeDefined()
  });

  it("Update Post with data", () => {
    const postService = new PostService(null, "tableName")
    const result = postService.updatePost("postId", updatedPost)
    expect(result).toBeDefined()
  });
})

describe('Delete post service', () => {
  it("Delete Post by null id", () => {
    const postService = new PostService(null, "tableName")
    const result = postService.deletePost("")
    expect(result).toBeDefined()
  });

  it("Delete Post with data", () => {
    const postService = new PostService(null, "tableName")
    const result = postService.deletePost("postId")
    expect(result).toBeDefined()
  });
})