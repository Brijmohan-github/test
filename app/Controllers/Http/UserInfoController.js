const User = require('../../Models/user.model'); // Ensure this path is correct

class UserInfoController {
  // Fetch user details based on token
  async userinfo({ request, response }) {
    const { token } = request.only(['token']);

    console.log('Received Token:', token);

    try {
      // Validate the received token
      if (!token) {
        return response.status(400).json({ message: 'Missing token parameter' });
      }

      // For testing purposes, use dummy data instead of querying the database
      const dummyUser = {
        _id: 'testUserId',
        username: 'testUser',
        currency: 'USD',
        playerBalance: 100.00,
      };

      // Simulate user lookup. Replace this with actual database query in production.
      const user = token === 'validToken' ? dummyUser : null;

      console.log('User Record:', user);

      // Check if the user exists
      if (!user) {
        return response.status(404).json({ message: 'User not found or invalid token' });
      }

      // Return user details
      return response.status(200).json({
        UserId: user._id,
        Currency: user.currency,
        Balance: user.playerBalance,
        Username: user.username
      });
    } catch (error) {
      console.error('Error fetching user details:', error);
      return response.status(500).json({ message: 'Error fetching user details', error });
    }
  }
}

module.exports = UserInfoController;
