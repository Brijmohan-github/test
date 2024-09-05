const { initialize } = require('./app/Models/index'); // Adjust the path as needed

async function testConnection() {
    await initialize();
    // Additional test logic or assertions can be added here if needed
}

testConnection().catch((error) => {
    console.error('Test connection failed:', error);
});
