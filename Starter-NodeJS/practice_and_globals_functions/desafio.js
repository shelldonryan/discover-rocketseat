const getFlags = require("./flags");

console.log(`Hi ${getFlags('--name')}, ${getFlags('--greeting')}`);