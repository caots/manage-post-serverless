import config from "@src/config";
import createDynamoDBClient from "@src/config/db";
import PostService from "@src/modules/posts/service/postService";

const postService = new PostService(createDynamoDBClient(), config.DB_TABLE_NAME);

export default postService;
