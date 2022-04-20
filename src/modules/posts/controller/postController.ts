import { ResponseUtil } from '@src/core/response';
import postService from '@src/modules/posts/service';
import { Context } from 'aws-lambda';
import * as uuid from 'uuid';
import { PostValidate } from '@src/modules/posts/utils/postValidate';
import { RequestPost } from '../model/Post';

export default class PostController {
  postValidate = new PostValidate();

  /**
   * Get all post
   * @param {*} event
   */
   public gets = async (event: any, context?: Context) => {
    const params: RequestPost = event.queryStringParameters;
    try {
      const posts = await postService.getAllPosts(params);
      return ResponseUtil.success(posts);
    } catch (err) {
      return ResponseUtil.error(err.message);
    }
  }

  /**
   * Find one
   * @param {*} event
   */
   public getById = async (event: any, context?: Context) => {
    const postId: string = event.pathParameters.postId;
    try {
      const post = await postService.getPost(postId);
      return ResponseUtil.success(post);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }


  /**
   * Create post
   * @param {*} event
   */
   public create = async (event: any, context?: Context) => {
    try {
      const postId: string = uuid.v4();
      const params = await this.postValidate.vCreatePost(event.body);
      const post = await postService.createPost({
        ...params,
        postId,
        active: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      return ResponseUtil.success(post);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }

  /**
   * Update post
   * @param {*} event
   */
   public update = async (event: any, context?: Context) => {
    const postId: string = event.pathParameters.postId;
    const { body } = event;
    try {
      const post = await postService.updatePost(postId, body);
      return ResponseUtil.success(post);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }

  /**
   * Delete post
   * @param {*} event
   */
   public delete = async (event: any, context?: Context) => {
    const postId: string = event.pathParameters.postId;
    try {
      const post = await postService.deletePost(postId);
      return ResponseUtil.success(post);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }

}