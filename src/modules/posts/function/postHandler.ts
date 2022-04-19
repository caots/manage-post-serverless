import middify from '@src/core/middify';
import { APIGatewayEvent, APIGatewayProxyResult, Context, Handler } from 'aws-lambda';

import PostController from '@src/modules/posts/controller/postController';

const postController = new PostController();

/**
 * Get all
 */
export const gets: Handler = middify(async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return postController.gets(event, context);
});

/**
 * Get one
 */
 export const getById: Handler = middify(async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return postController.getById(event, context);
});

/**
 * Create post
 */
export const create: Handler = middify(async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return postController.create(event, context);
});

/**
 * update post
 */
 export const update: Handler = middify(async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return postController.update(event, context);
});

/**
 * delete post
 */
 export const remove: Handler = middify(async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return postController.delete(event, context);
});