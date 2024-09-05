const User = require('../../Models/user.model')

class UserInfoController {
  // Fetch user details based on token
  async userinfo({ request, response }) {
    const { token } = request.only(['token'])

    try {
      // Find the user by token
      const user = await User.findOne({ token: token })

      if (!user) {
        return response.status(404).json({ message: 'User not found or invalid token' })
      }

      // Return user details
      return response.json({
        UserId: user._id,
        Currency: user.currency,
        Balance: user.playerBalance,
        Username: user.username
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching user details', error })
    }
  }
}

module.exports = UserInfoController
