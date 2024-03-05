const { queryDynamoDB } = require('./dynamoDB');

const checkPhoneNumber = async (phoneNumber) => {
  try {
    const result = await queryDynamoDB(phoneNumber);
    return !!result;
  } catch (error) {
    console.error(`Error checking phone number: ${error}`);
    throw error;
  }
};

module.exports = {
  checkPhoneNumber,
};