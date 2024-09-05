class DebitRequestController {
    // Handle debit request
    async debitRequest({ request, response }) {
      const {
        SessionId,
        UserId,
        TransactionId,
        Amount,
        GameId,
        RoundId,
        TrnReason,
        TrnDescription,
        GameplayTags,
        ProductFamily
      } = request.only([
        'SessionId',
        'UserId',
        'TransactionId',
        'Amount',
        'GameId',
        'RoundId',
        'TrnReason',
        'TrnDescription',
        'GameplayTags',
        'ProductFamily'
      ]);
  
      console.log('Received SessionId:', SessionId);
      console.log('Received UserId:', UserId);
      console.log('Received TransactionId:', TransactionId);
      console.log('Received Amount:', Amount);
      console.log('Received GameId:', GameId);
      console.log('Received RoundId:', RoundId);
      console.log('Received TrnReason:', TrnReason);
      console.log('Received TrnDescription:', TrnDescription);
      console.log('Received GameplayTags:', GameplayTags);
      console.log('Received ProductFamily:', ProductFamily);
  
      try {
        // Validate the received data
        if (!SessionId || !UserId || !TransactionId || !Amount || !GameId || !RoundId || !TrnReason || !TrnDescription || !ProductFamily) {
          return response.status(400).json({ message: 'Missing required parameters' });
        }
  
        // Since we're using dummy data, return a hardcoded response
        return response.status(200).json({
          TransactionId: TransactionId,
          Balance: 88.5, // Dummy balance
          BonusAmount: 0, // Dummy bonus amount
        });
  
      } catch (error) {
        console.error('Error processing debit request:', error);
        return response.status(500).json({ message: 'Error processing debit request', error });
      }
    }
  }
  
  module.exports = DebitRequestController;
  