const aws = require('aws-sdk');

const { TABLE_NAME, REGION } = process.env;

const dynamoDB = new aws.DynamoDB.DocumentClient({ region: REGION });

const create = async () => {
  return await dynamoDB
    .put({
      // TODO: Map data to Item in dynamo db
      Item: {},
      TableName: TABLE_NAME
    })
    .promise();
};

const get = async () =>
  await dynamoDB
    .query({
      // TODO: Add Expression Attribute Names
      ExpressionAttributeNames: {},
      // TODO: Add Expression Attribute Values
      ExpressionAttributeValues: {},
      // TODO: Add Key Condition Expression
      KeyConditionExpression: '',
      TableName: TABLE_NAME
    })
    .promise();

const getAll = async () =>
  await dynamoDB
    .query({
      // TODO: Add Index for searching or remove this if it does not apply
      IndexName: '',
      // TODO: Add Expression Attribute Names
      ExpressionAttributeNames: {},
      // TODO: Add Expression Attribute Values
      ExpressionAttributeValues: {},
      // TODO: Add Key Condition Expression
      KeyConditionExpression: '',
      TableName: TABLE_NAME
    })
    .promise();

const remove = async () =>
  await dynamoDB
    .delete({
      // TODO: Add Key for Item lookup
      Key: {},
      TableName: TABLE_NAME
    })
    .promise();

const update = async () => {
  return await dynamoDB
    .update({
      // TODO: Add Key for Item lookup
      Key: {},
      // TODO: Add Expression Attribute Values
      ExpressionAttributeValues: {},
      // TODO: Add Update Expression
      UpdateExpression: '',
      TableName: TABLE_NAME,
      ReturnValues: 'UPDATED_NEW'
    })
    .promise();
};

module.exports = {
  create,
  get,
  getAll,
  remove,
  update
};
