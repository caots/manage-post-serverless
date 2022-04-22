import PostService from '../../service/postService';
import { createPost, ParamsGetAllPostService, requestCreatePost, responseGetPostById, updatedPost } from '../mock/post.mock';
const { DocumentClient } = require('aws-sdk/clients/dynamodb');

const isTest = true;
const config = {
  convertEmptyValues: true,
  ...(isTest && {
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    sslEnabled: false,
    region: 'us-east-1',
  }),
};

const ddb = new DocumentClient(config);
const tableName = "Posts-dev";

// describe('get all post service', () => {

//   ParamsGetAllPostService.forEach((caseValue) => {
//     it(caseValue.title, () => {
//       const postService = new PostService(null, "tableName")
//       const params = caseValue.params
//       const result = postService.getAllPosts(params)
//       expect(result).toBeDefined()
//     });
//   });
// })

describe('get post service', () => {
  it("Get Post by id", async () => {
    const postId = "7e967e60-cd98-48bc-9343-b35457d584e5";
    const { Item } = await ddb.get({ TableName: tableName, Key: { postId } }).promise();
    expect(Item).toEqual(responseGetPostById);
  });

  it("Get Post by wrong id", async () => {
    const postId = "aaaa";
    const { Item } = await ddb.get({ TableName: tableName, Key: { postId } }).promise();
    expect(Item).toEqual(undefined);
  });
})

describe('create post service', () => {
  it("Create Post success", async () => {
    const { Item } = await ddb.put({
      TableName: tableName,
      Item: requestCreatePost,
    }).promise();
    expect(Item).toEqual(undefined);
  });
})

// describe('Update post service', () => {
//   it("Update Post by null data", () => {
//     const postService = new PostService(null, "tableName")
//     const result = postService.updatePost("", null)
//     expect(result).toBeDefined()
//   });

//   it("Update Post with data", () => {
//     const postService = new PostService(null, "tableName")
//     const result = postService.updatePost("postId", updatedPost)
//     expect(result).toBeDefined()
//   });
// })

describe('Delete post service', () => {
  it("Delete Post success", async () => {
    const postId = "ea59ee0e-d6e4-4c30-a453-4b909063badd";
    const { Item } = await ddb.delete({
      TableName: tableName,
      Key: { postId },
    })
      .promise();
    expect(Item).toEqual(undefined);
  });
})