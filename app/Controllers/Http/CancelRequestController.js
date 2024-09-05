class CancelRequestController {
    // Handle cancel request
    async cancelRequest({ request, response }) {
      const {
        TransactionId,
        UserId,
        Amount,
        RoundId,
        GameId,
        Reason,
        TransactionType,
        ProductFamily,
        SessionId
      } = request.only([
        'TransactionId',
        'UserId',
        'Amount',
        'RoundId',
        'GameId',
        'Reason',
        'TransactionType',
        'ProductFamily',
        'SessionId'
      ]);
  
      console.log('Received TransactionId:', TransactionId);
      console.log('Received UserId:', UserId);
      console.log('Received Amount:', Amount);  
      console.log('Received RoundId:', RoundId);
      console.log('Received GameId:', GameId);
      console.log('Received Reason:', Reason);
      console.log('Received TransactionType:', TransactionType);
      console.log('Received ProductFamily:', ProductFamily);
      console.log('Received SessionId:', SessionId);
  
      try {
        // Return a dummy response
        return response.status(200).json({
          Balance: 1200.00 // Dummy balance after cancellation
        });
  
      } catch (error) {
        console.error('Error processing cancel request:', error);
        return response.status(500).json({ message: 'Error processing cancel request', error });
      }
    }
  }
  
  module.exports = CancelRequestController;
  