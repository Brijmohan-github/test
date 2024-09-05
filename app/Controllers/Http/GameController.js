'use strict';

const HashUtil = use('App/Utils/HashUtil');
const Env = use('Env');

class GameController {
    async authenticate({ request, response }) {
        const { Token, GameId } = request.only(['Token', 'GameId']);
        const passKey = Env.get('PASS_KEY');
        const receivedHash = request.input('hash');

        // Construct the request body as a string for hashing
        const requestBody = JSON.stringify({ Token, GameId });

        // Validate the hash
        if (!HashUtil.validateMD5Hash(requestBody, passKey, receivedHash)) {
            return response.status(400).json({ error: 'InvalidHash' });
        }

        // Validate the token and authenticate the player for the game
        const session = this.createSession(Token, GameId); // Implement this method as needed

        if (!session) {
            return response.status(401).json({ error: 'AuthenticationFailed' });
        }

        return response.json(session); // Respond with session information
    }

    createSession(token, gameId) {
        // Implement your logic to create and manage sessions based on the token and game
        return { sessionId: '1018472849610899456', userId: '1' }; // Mock implementation
    }
}

module.exports = GameController;
