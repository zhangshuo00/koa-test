const AESCipher = require("../utils/crypto");
const axios = require('axios');

const backChallenge = (ctx) => {
  let {encrypt} = ctx.request.body;
  const cipher = new AESCipher("lovelife");
  const decrypted = cipher.decrypt(encrypt);

  console.log(decrypted);

  const content = JSON.parse(decrypted).event.message.content;
  const text = JSON.parse(content).text;
  
  axios.post('https://flomoapp.com/iwh/MTU4NTQ/c3982e38acc11a50a09d323351ba65a8/',{
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
