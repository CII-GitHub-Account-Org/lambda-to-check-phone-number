const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const queryDynamoDB = async (phoneNumber) => {
  const params = {
    TableName: 'YourDynamoDBTableName',
    KeyConditionExpression: 'phoneNumber = :phoneNumber',
    ExpressionAttributeValues: {
      ':phoneNumber': phoneNumber
    }
  };

  try {
    const data = await dynamoDB.query(params).promise();
    return data.Items.length > 0;
  } catch (error) {
    console.error(`Error querying DynamoDB: ${error}`);
    return false;
  }
};

module.exports = {
  queryDynamoDB
};