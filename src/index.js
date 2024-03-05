const AWS = require('aws-sdk');
const checkPhoneNumber = require('./checkPhoneNumber');

exports.handler = async (event) => {
    /**
     * The phone number obtained from the event.
     * @type {string}
     */
    const phoneNumber = event.Details.ContactData.CustomerEndpoint.Address;
    const exists = await checkPhoneNumber(phoneNumber);

    return {
        lambdaResult: exists ? 'true' : 'false'
    };
};