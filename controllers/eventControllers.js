const AESCipher = require("../utils/crypto");
const axios = require('axios');

const {aesToken, flomoToken} = require("../config/token.js");

const backChallenge = (ctx) => {
  let {encrypt} = ctx.request.body;
  const cipher = new AESCipher(aesToken);
  const decrypted = cipher.decrypt(encrypt);

  console.log(decrypted);

  const content = JSON.parse(decrypted).event.message.content;
  const text = JSON.parse(content).text;
  
  axios.post(`https://flomoapp.com/iwh/MTU4NTQ/${flomoToken}/`,{
    "content": text
  })
  .then(function (res) {
    // console.log(res);
  })
  .catch(function (err) {
    // console.log(err);
  });
  ctx.body = JSON.parse(decrypted);
};

module.exports = {
  backChallenge
}
