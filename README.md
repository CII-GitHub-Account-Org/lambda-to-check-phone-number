# My Lambda Function

This project contains a Node.js-based AWS Lambda function that checks if a given phone number exists in a DynamoDB table. The function is designed to be invoked from an Amazon Connect flow.

## Files

- `src/index.js`: The entry point of the Lambda function. It exports a handler function that receives the event from Amazon Connect, extracts the phone number, and calls the `checkPhoneNumber` function with it.

- `src/checkPhoneNumber.js`: This file exports a function `checkPhoneNumber` that receives a phone number, calls the `queryDynamoDB` function with it, and returns a boolean indicating whether the phone number exists in the DynamoDB table.

- `src/dynamoDB.js`: This file exports a function `queryDynamoDB` that receives a phone number, queries the DynamoDB table for it, and returns a boolean indicating whether the phone number was found.

- `package.json`: The configuration file for npm. It lists the dependencies and scripts for the project.

- `package-lock.json`: Automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated.

## Setup

1. Install the dependencies by running `npm install`.

2. Deploy the Lambda function to AWS.

3. Set up the Amazon Connect flow to invoke the Lambda function with the phone number as an input.

## Usage

The Lambda function can be invoked with an event object that contains a `phoneNumber` property. The function will return a boolean indicating whether the phone number exists in the DynamoDB table.