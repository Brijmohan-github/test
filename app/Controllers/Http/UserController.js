// app/Controllers/Http/UserController.js
const User = require('../../Models/User')

class UserController {
  // Fetch all users
  async index({ response }) {
    try {
      const users = await User.find()
      return response.json(users)
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching users', error })
    }
  }

  // Create a new user
  async store({ request, response }) {
    const { name, email, password } = request.only(['name', 'email', 'password'])

    try {
      const newUser = new User({ name, email, password })
      await newUser.save()
      return response.status(201).json(newUser)
    } catch (error) {
      return response.status(400).json({ message: 'Error creating user', error })
    }
  }

  // Fetch a single user by ID
  async show({ params, response }) {
    try {
      const user = await User.findById(params.id)
      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }
      return response.json(user)
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching user', error })
    }
  }

  // Update a user by ID
  async update({ params, request, response }) {
    const { name, email, password } = request.only(['name', 'email', 'password'])

    try {
      const updatedUser = await User.findByIdAndUpdate(params.id, { name, email, password }, { new: true })
      if (!updatedUser) {
        return response.status(404).json({ message: 'User not found' })
      }
      return response.json(updatedUser)
    } catch (error) {
      return response.status(400).json({ message: 'Error updating user', error })
    }
  }

  // Delete a user by ID
  async destroy({ params, response }) {
    try {
      const deletedUser = await User.findByIdAndDelete(params.id)
      if (!deletedUser) {
        return response.status(404).json({ message: 'User not found' })
      }
      return response.json({ message: 'User deleted successfully' })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting user', error })
    }
  }
}

module.exports = UserController
