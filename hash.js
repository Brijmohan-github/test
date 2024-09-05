const crypto = require('crypto');
const passKey = 'Pwd123';
const requestBody = JSON.stringify({ Token: '123xyz' });
const hash = crypto.createHash('md5').update(requestBody + passKey).digest('hex').toUpperCase();
console.log(hash); // Use this value in the hash parameter
