const User = require('../../Models/user.model'); // Ensure the correct path

class CreditRequestController {
  // Handle credit request
  async creditRequest({ request, response }) {
    const {
      SessionId,
      UserId,
      TransactionId,
      DebitTransactionIds,
      Amount,
      GameId,
      RoundId,
      TrnReason,
      TrnDescription,
      BonusId,
      BonusType,
      GameplayTags,
      ProductFamily
    } = request.only([
      'SessionId',
      'UserId',
      'TransactionId',
      'DebitTransactionIds',
      'Amount',
      'GameId',
      'RoundId',
      'TrnReason',
      'TrnDescription',
      'BonusId',
      'BonusType',
      'GameplayTags',
      'ProductFamily'
    ]);

    console.log('Received SessionId:', SessionId);
    console.log('Received UserId:', UserId);
    console.log('Received TransactionId:', TransactionId);
    console.log('Received Amount:', Amount);
    console.log('Received DebitTransactionIds:', DebitTransactionIds);
    console.log('Received GameId:', GameId);
    console.log('Received RoundId:', RoundId);
    console.log('Received TrnReason:', TrnReason);
    console.log('Received TrnDescription:', TrnDescription);
    console.log('Received BonusId:', BonusId);
    console.log('Received BonusType:', BonusType);
    console.log('Received GameplayTags:', GameplayTags);
    console.log('Received ProductFamily:', ProductFamily);

    try {
      // Validate the required parameters
      if (!SessionId || !UserId || !TransactionId || !Amount || !GameId || !RoundId || !TrnReason || !TrnDescription || !ProductFamily) {
        return response.status(400).json({ message: 'Missing required parameters' });
      }

      // Find the user based on UserId
    //   const user = await User.findOne({ _id: UserId }).exec();

    //   // Check if the user exists
    //   if (!user) {
    //     return response.status(404).json({ message: 'User not found' });
    //   }

    //   // Parse the amount to be credited
    //   const amountToCredit = parseFloat(Amount);
    //   if (isNaN(amountToCredit) || amountToCredit <= 0) {
    //     return response.status(400).json({ message: 'Invalid amount' });
    //   }

      // Credit the amount to the user's balance
    //   user.playerBalance += amountToCredit;

    //   // Optionally, store the transaction info
    //   user.debitTransactionIds.push(...DebitTransactionIds);

    //   await user.save();

      // Return a dummy response
      return response.status(200).json({
        TransactionId: TransactionId,
        Balance: 1500.00 // Dummy balance after credit
      });

    } catch (error) {
      console.error('Error processing credit request:', error);
      return response.status(500).json({ message: 'Error processing credit request', error });
    }
  }
}

module.exports = CreditRequestController;
