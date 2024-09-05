const crypto = require('crypto');

/**
 * Generate MD5 hash
 * @param {string} requestBody - The body of the request
 * @param {string} passKey - The PassKey for hashing
 * @return {string} - The generated MD5 hash
 */
function generateMD5Hash(requestBody, passKey) {
    const concatenatedString = requestBody + passKey;
    return crypto.createHash('md5').update(concatenatedString).digest('hex').toUpperCase();
}

/**
 * Validate the MD5 hash
 * @param {string} requestBody - The body of the request
 * @param {string} passKey - The PassKey for hashing
 * @param {string} receivedHash - The hash received in the request
 * @return {boolean} - True if the hash is valid, otherwise false
 */
function validateMD5Hash(requestBody, passKey, receivedHash) {
    const expectedHash = generateMD5Hash(requestBody, passKey);
    return expectedHash === receivedHash;
}

module.exports = {
    generateMD5Hash,
    validateMD5Hash
};
