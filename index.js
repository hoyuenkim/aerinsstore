const express = require('express');
const nunjucks = require('nunjucks');
const axios = require('axios');
const dotenv = require('dotenv');

const app = express();

// Nunjucks 설정
nunjucks.configure('views', {
  autoescape: true, // HTML escaping 활성화 (보안)
  express: app, // Express와 통합
  watch: true, // 파일 변경 시 자동 반영 (개발용)
});

app.get('/', async (req, res) => {
  return res.render('index.html');
});

app.get('/terms', async (req, res) => {
  return res.render('terms.html');
});

const axios = require('axios');
require('dotenv').config(); // 환경 변수 파일(.env) 사용

const schedule = require('node-schedule');
const dayjs = require('dayjs');

// // 환경 변수 설정
// const ACCESS_TOKEN = process.env.ACCESS_TOKEN; // Instagram Graph API Access Token
// const IG_USER_ID = process.env.IG_USER_ID; // Instagram User ID (Business/Creator)

// // 1. 이미지를 Facebook Container에 업로드
// async function uploadImageToInstagram(imageUrl, caption) {
//   try {
//     // Step 1: Instagram Container 생성
//     const containerResponse = await axios.post(
//       `https://graph.facebook.com/v17.0/${IG_USER_ID}/media`,
//       {
//         image_url: imageUrl, // 업로드할 이미지 URL
//         caption: caption, // 이미지에 대한 캡션
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//         },
//       }
//     );

//     const containerId = containerResponse.data.id;
//     console.log('Container ID:', containerId);

//     // Step 2: Instagram 게시물 게시
//     const publishResponse = await axios.post(
//       `https://graph.facebook.com/v17.0/${IG_USER_ID}/media_publish`,
//       {
//         creation_id: containerId, // 위에서 생성한 컨테이너 ID
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//         },
//       }
//     );

//     console.log('Post ID:', publishResponse.data.id);
//     console.log('Instagram 포스팅 성공!');
//   } catch (error) {
//     console.error(
//       'Instagram 포스팅 실패:',
//       error.response?.data || error.message
//     );
//   }
// }

// // 특정 시간 스케줄 설정 (매일 오후 3시 30분)
// const job = schedule.scheduleJob('01 18 * * *', 'Asia/Seoul', async () => {
//   try {
//     const today = dayjs().format('YYYYMMDD');
//     const response = await axios.get(
//       `https://openapi.foodsafetykorea.go.kr/api/${process.env.CREDENTIAL}/json/1/5/CRET_DTM=${today}`
//     ); // 호출할 API URL
//     const {
//       data: { row, total_count },
//     } = response.json();

//     if (total_count != '0') {
//       row.map((object) => {
//         const imageUrl = object.IMG_FILE_PATH;
//         const caption = `#${object.PRDLST_CD_NM} ${object.BSSHNM} ${object.PRDTNM} ${object.RTRVLPRVNS}`;
//         uploadImageToInstagram(imageUrl, caption);
//       });
//     }
//   } catch (e) {
//     console.error(err.response);
//   }
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
