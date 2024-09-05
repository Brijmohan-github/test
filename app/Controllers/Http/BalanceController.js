const mongoose = require('mongoose');
const User = require('../../Models/user.model'); // Ensure this path is correct

class BalanceController {
    // Fetch the player's current balance
    async getBalance({ request, response }) {
      const { SessionId, UserId, Currency, ProductFamily } = request.only(['SessionId', 'UserId', 'Currency', 'ProductFamily']);
  
      console.log('Received SessionId:', SessionId);
      console.log('Received UserId:', UserId);
      console.log('Received Currency:', Currency);
      console.log('Received ProductFamily:', ProductFamily);
  
      try {
        // Validate the received data
        if (!SessionId || !UserId || !Currency || !ProductFamily) {
          return response.status(400).json({ message: 'Missing required parameters' });
        }
  
        // Return dummy balance data
        return response.status(200).json({
          Balance: 100.00  // Example dummy balance
        });
  
      } catch (error) {
        console.error('Error fetching balance:', error);
        return response.status(500).json({ message: 'Error fetching balance', error });
      }
    }
  }
  
  module.exports = BalanceController;
  
