const User = require('../../Models/user.model'); // Ensure this path is correct
'use strict';

const HashUtil = use('App/Utils/HashUtil');
const Env = use('Env');

class AuthController {
    async authenticate({ request, response }) {
        // Extract Token, GameId, and ProductFamily from the request
        const { Token, GameId, ProductFamily } = request.only(['Token', 'GameId', 'ProductFamily']);
        const passKey = Env.get('PASS_KEY');
        const receivedHash = request.input('hash');

        // Construct the request body as an object
        const requestBody = { Token, GameId, ProductFamily };

        // Validate the hash
        if (!HashUtil.decode(requestBody, receivedHash, passKey)) {
            return response.status(400).json({ message: 'Invalid hash', code: 'InvalidHash' });
        }

        // Proceed with the actual authentication logic
        try {
            // Here, instead of querying the database, return dummy data for testing
            const dummyUser = {
                _id: 'testUserId',
                username: 'testUser',
                currency: 'USD',
                totalCoins: 100.00,
            };

            // Generate a new session ID
            const sessionId = this.generateSessionId();

            // Return the required information with dummy data
            return response.status(200).json({
                SessionId: sessionId,
                UserId: dummyUser._id,
                Currency: dummyUser.currency,
                Balance: dummyUser.totalCoins,
                Username: dummyUser.username,
            });

        } catch (error) {
            console.error('Error during authentication:', error);
            return response.status(500).json({ message: 'Error during authentication', error });
        }
    }

    // Function to generate a unique session ID
    generateSessionId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}

module.exports = AuthController;
