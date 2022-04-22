module.exports = {
  tables: [
    {
      TableName: `Posts-dev`,
      KeySchema: [{ AttributeName: "postId", KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: "postId", AttributeType: "S" }],
      ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 },
    },
  ],
};
