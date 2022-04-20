import config from "@src/config";
import { Post, RequestPost } from "@src/modules/posts/model/Post";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { ResponseListPost } from "../dtos/getAllPostDto";
import { listPostHelper } from "../utils/dbHelper";

class PostService {
  private mustHaveTableName = "notHaveTableName";

  constructor(
    private readonly docClient: DocumentClient,
    private readonly tableName: string
  ) { }

  async getAllPosts(params: RequestPost): Promise<ResponseListPost> {
    const results = await listPostHelper(
      this.docClient,
      this.tableName,
      params?.title,
      params?.limit,
      "postId",
      params?.next
    );
    return {
      data: results.items,
      next: params?.next,
      limit: params?.limit
    };
    
  }

  async getPost(postId: string): Promise<Post> {
    const result = await this.docClient
      .get({
        TableName: this.tableName || this.mustHaveTableName,
        Key: { postId },
      })
      .promise();

    return result.Item as Post;
  }

  async createPost(post: Post): Promise<Post> {
    await this.docClient
      .put({
        TableName: this.tableName || this.mustHaveTableName,
        Item: post,
      })
      .promise();

    return post;
  }

  async updatePost(postId: string, partialPost: Partial<Post>): Promise<Post> {
    const updated = await this.docClient
      .update({
        TableName: this.tableName || this.mustHaveTableName,
        Key: { postId },
        UpdateExpression:
          "set #title = :title, description = :description, active = :active",
        ExpressionAttributeNames: {
          "#title": "title",
        },
        ExpressionAttributeValues: {
          ":title": partialPost.title,
          ":description": partialPost.description,
          ":active": partialPost.active,
        },
        ReturnValues: "UPDATED_NEW",
      })
      .promise();

    return updated.Attributes as Post;
  }

  async deletePost(postId: string) {
    return this.docClient
      .delete({
        TableName: this.tableName || this.mustHaveTableName,
        Key: { postId },
      })
      .promise();
  }
}

export default PostService;
