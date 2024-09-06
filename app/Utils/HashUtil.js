// app/Utils/HashUtil.js

'use strict';

const crypto = require('crypto');

class HashUtil {
    // Function to encode and generate MD5 hash
    static encode(requestBody, passKey) {
        const concatenatedString = JSON.stringify(requestBody) + passKey;
        return crypto.createHash('md5').update(concatenatedString).digest('hex').toUpperCase();
    }

    // Function to validate the hash
    static decode(requestBody, receivedHash, passKey) {
        const generatedHash = this.encode(requestBody, passKey);
        return generatedHash === receivedHash;
    }
}

module.exports = HashUtil;
