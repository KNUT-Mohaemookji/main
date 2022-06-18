const queryJob = require('./jobs/query');
const env = process.env.NODE_ENV;
const envFile = env === 'production' ? '.env' : 'mh.env';


const { google } = require('googleapis');

// getquery = tmp-list.json에서 주제별로 검색어를 가져옴
// => query.js는 tmp-list.json 구조를 바꾸고 단순히 가져와서 api 쿼리를 하는 것으로 변경 예정
// console.log(queryJob.fnGetQueries());

// appRoot은 현재 파일의 Root 파일 위치를 가져오는 것
const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
require('dotenv').config({ path: path.resolve(`${appRoot}`, envFile)});

const tokenJob = require('./jobs/token');

console.log(23, process.env.YOUTUBE_TOKEN);
console.log(tokenJob());