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
│ │ ├─ pet
│ │ │ ├─ config
│ │ │ | ├─ serverless.yml   # config serverless for pet module
│ │ │ ├─ controller
│ │ │ | ├─ petController.ts   # pet controller source code
│ │ │ ├─ dtos
│ │ │ | ├─ createPetDto.ts   # Create pet dto source code
│ │ │ | ├─ getAllPetDto.ts   # Get all pet dto source code
│ │ │ | ├─ updatePetDto.ts   # Update pet dto source code
│ │ │ ├─ function - handler
│ │ │ | ├─ petHandler.ts   # Pet Handler source code
| | | ├─ service
│ │ │ | ├─ index.ts   
│ │ │ | ├─ petService.ts   # Pet Service source code
| | | ├─ utils
│ │ │ | ├─ dbHelper.ts   # Helper query connect DB
│ │ │ | ├─ petValidate.ts   # Pet Validate source code
│ │ │ ├─ model
│ │ │ | ├─ petModel.ts   # Pet Model source code
│ │ │ ├─ test     # Unit test for project
│ │ │ | ├─ controller   # Test all func in controller
│ │ │ | ├─ function  # Test all func in function
│ │ │ | ├─ mock     # mock data to test
│ │ │ | ├─ service   # Test all func in service
│ │ │ | ├─ utils   # Test all func in utils
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
    "status": 200,
    "message": "success",
    "data": "{\"code\":0,\"message\":\"success\",\"data\":[{\"_id\":\"5dff21f71c9d440000a30dad\",\"createdAt\":\"2020-05-16T09:27:51.219Z\"},{\"_id\":\"5dff22ba1c9d440000a30dae\",\"createdAt\":\"2020-05-16T09:27:51.220Z\"}]}"
}
```
### To Test It Locally

* Run ```npm install``` to install all the necessary dependencies.
* Run ```npm start``` use serverless offline to test locally. 

### Deploy on AWS, simply run:

```
$ npm run deploy

```
### To run Unit test and coverage
* $ ```npm run test``` or ```jest``` to test
* $ ```jest --coverage``` to test show coverage

The expected result should be similar to:

```
endpoints:
  POST - https://e1wvw0c78l.execute-api.us-east-1.amazonaws.com/dev/create-pet
  GET - https://e1wvw0c78l.execute-api.us-east-1.amazonaws.com/dev/get-pet
  GET - https://e1wvw0c78l.execute-api.us-east-1.amazonaws.com/dev/get-pet/{petId}
  PUT - https://e1wvw0c78l.execute-api.us-east-1.amazonaws.com/dev/update-pet/{petId}
  DELETE - https://e1wvw0c78l.execute-api.us-east-1.amazonaws.com/dev/delete-pet/{petId}
functions:
  createPet: manage-pet-serverless-dev-createPet (2.1 MB)
  getAllPet: manage-pet-serverless-dev-getAllPet (2.1 MB)
  getPet: manage-pet-serverless-dev-getPet (2.1 MB)
  updatePet: manage-pet-serverless-dev-updatePet (2.1 MB)
  deletePet: manage-pet-serverless-dev-deletePet (2.1 MB)
layers:
  None
```