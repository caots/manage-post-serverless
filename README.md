## AWS Serverless API

### Project Structure

```
aws-serverless-api
├─ .git
├─ .gitignore
├─ package.json
├─ serverless.yml
├─ source-map-install.js
├─ src
│ ├─ core
│ │ ├─ middify.ts             # Config middify for serverless
│ │ ├─ response.ts            # Config middify for serverless
│ │ ├─ formatJsonResponse.ts            # Config format json response for serverless
│ ├─ config                   # Configs, constants
│ │ ├─ db.ts                  # Config Db
│ │ ├─ index.ts               # Config constants
│ │ ├─ message.ts             # Config Message
│ ├─ modules                  # Code base of each modules
│ │ ├─ post
│ │ │ ├─ config
│ │ │ | ├─ post-functions.yml   # config serverless for post module
│ │ │ ├─ controller
│ │ │ | ├─ postController.ts   # Post controller source code
│ │ │ ├─ dtos
│ │ │ | ├─ createPostDto.ts   # Create post dto source code
│ │ │ | ├─ getAllPostDto.ts   # Get all post dto source code
│ │ │ | ├─ updatePostDto.ts   # Update post dto source code
│ │ │ ├─ function - handler
│ │ │ | ├─ postHandler.ts   # Post Handler source code
| | | ├─ service
│ │ │ | ├─ index.ts   
│ │ │ | ├─ postService.ts   # Post Service source code
| | | ├─ utils
│ │ │ | ├─ dbHelper.ts   # Helper query connect DB
│ │ │ | ├─ postValidate.ts   # Post Validate source code
│ │ │ ├─ model
│ │ │ | ├─ postModel.ts   # Post Model source code
├─ tsconfig.json
├─ jest.config.json
└─ webpack.config.js

```
## Use Cases

* REST API with typescript
* DynamoDB data storage
* Mocha unit tests and lambda-tester interface test
* AWS lambda function log view

## Invoke the function locally

``bash
serverless invoke local --function find
```

Which should result in:

```bash
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.

{
    "statusCode": 200,
    "body": "{\"code\":0,\"message\":\"success\",\"data\":[{\"_id\":\"5dff21f71c9d440000a30dad\",\"createdAt\":\"2020-05-16T09:27:51.219Z\"},{\"_id\":\"5dff22ba1c9d440000a30dae\",\"createdAt\":\"2020-05-16T09:27:51.220Z\"}]}"
}
```
### To Test It Locally

* Run ```npm install``` to install all the necessary dependencies.
* Run ```npm start``` use serverless offline to test locally. 

### Deploy on AWS, simply run:

```
$ npm run deploy

```

The expected result should be similar to:

```
endpoints:
  POST - https://vhhf9ng1f3.execute-api.us-east-1.amazonaws.com/dev/create-post
  GET - https://vhhf9ng1f3.execute-api.us-east-1.amazonaws.com/dev/get-post
  GET - https://vhhf9ng1f3.execute-api.us-east-1.amazonaws.com/dev/get-post/{postId}
  PUT - https://vhhf9ng1f3.execute-api.us-east-1.amazonaws.com/dev/update-post/{postId}
  DELETE - https://vhhf9ng1f3.execute-api.us-east-1.amazonaws.com/dev/delete-post/{postId}
functions:
  createPost: manage-post-serverless-dev-createPost (1.9 MB)
  getAllPost: manage-post-serverless-dev-getAllPost (1.9 MB)
  getPost: manage-post-serverless-dev-getPost (1.9 MB)
  updatePost: manage-post-serverless-dev-updatePost (1.9 MB)
  deletePost: manage-post-serverless-dev-deletePost (1.9 MB)
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
```