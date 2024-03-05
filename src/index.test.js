const { handler } = require('../src/index');
const checkPhoneNumber = require('../src/checkPhoneNumber');

jest.mock('../src/checkPhoneNumber');

describe('Lambda Handler', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should return true if phone number exists', async () => {
        const event = {
            Details: {
                ContactData: {
                    CustomerEndpoint: {
                        Address: '1234567890'
                    }
                }
            }
        };

        checkPhoneNumber.mockResolvedValue(true);

        const result = await handler(event);

        expect(result).toEqual({
            lambdaResult: 'true'
        });
        expect(checkPhoneNumber).toHaveBeenCalledWith('1234567890');
    });

    it('should return false if phone number does not exist', async () => {
        const event = {
            Details: {
                ContactData: {
                    CustomerEndpoint: {
                        Address: '9876543210'
                    }
                }
            }
        };

        checkPhoneNumber.mockResolvedValue(false);

        const result = await handler(event);

        expect(result).toEqual({
            lambdaResult: 'false'
        });
        expect(checkPhoneNumber).toHaveBeenCalledWith('9876543210');
    });
});