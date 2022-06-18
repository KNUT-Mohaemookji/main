'use strict';

const TOKENS = process.env.YOUTUBE_TOKEN;

// 날짜에 따라 인덱스가 되도록 함
module.exports = function () /* string */
{
  let keys = TOKENS.split(',');
  let key = keys[(new Date().getDate()) % keys.length];
  console.log(key);
  console.log(key);
  console.log(key);
  console.log(key);
  console.log(key);
  return key;
}

