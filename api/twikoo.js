// api/twikoo.js
const tkserver = require('tkserver');
// 如果 tkserver 有 app 屬性，則導出它，否則導出 tkserver 本身
module.exports = tkserver.app || tkserver;
