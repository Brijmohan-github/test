const User = require('../../Models/user.model'); // Ensure this path is correct

class AuthController {
  async authenticate({ request, response }) {
    // Extract Token, GameId, and ProductFamily from the request
    const { token, gameID, productFamily } = request.only(['token', 'gameID', 'productFamily']);

    console.log('Received Token:', token);
    console.log('Received ProductFamily:', productFamily);
    console.log('Received GameId:', gameID);

    try {
      // Validate the received data
      if (!token || !gameID || !productFamily) {
        return response.status(400).json({ message: 'Missing required parameters' });
      }

      // Find the user based on the token, GameId, and ProductFamily
      const user = await User.findOne({
        token: token,
        gameID: gameID,          
        productFamily: productFamily 
      });


      // Check if the user exists
      if (!user) {
        return response.status(404).json({ message: 'User not found or invalid token' });
      }

      // Assuming you have a function to create a new game session
      const sessionId = generateSessionId();

      // Return the required information
      return response.status(200).json({
        SessionId: sessionId,
        UserId: user._id,
        Currency: user.currency,
        Balance: user.totalCoins, // Use user.totalCoins for balance
        Username: user.username,
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
