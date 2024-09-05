const User = require('../../Models/user.model'); // Ensure this path is correct

class AuthController {
  async authenticate({ request, response }) {
    // Extract Token, GameId, and ProductFamily from the request
    const { Token, GameId, ProductFamily } = request.only(['Token', 'GameId', 'ProductFamily']);

    console.log('Received Token:', Token);
    console.log('Received ProductFamily:', ProductFamily);
    console.log('Received GameId:', GameId);

    try {
      // Validate the received data
      if (!Token || !GameId || !ProductFamily) {
        return response.status(400).json({ message: 'Missing required parameters' });
      }

      // Here, instead of querying the database, return dummy data for testing
      const dummyUser = {
        _id: 'testUserId',
        username: 'testUser',
        currency: 'USD',
        totalCoins: 100.00,
      };

      // Generate a new session ID
      const sessionId = generateSessionId();

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
}

// Function to generate a unique session ID
function generateSessionId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

module.exports = AuthController;
