const firebase = require("firebase");
const pLimit = require('p-limit');

const HN_DATABASE_URL = 'https://hacker-news.firebaseio.com';
const MAX_CONCURRENT_PROMISES = 2000;

const app = firebase.initializeApp({ databaseURL: HN_DATABASE_URL }, 'hackernews');
const db = app.database();
const maxttemRef = db.ref("v0/maxitem");
const getItem = itemId => db.ref(`v0/item/${itemId}`).limitToLast(1).once("value");
const limit = pLimit(MAX_CONCURRENT_PROMISES);

(async () => {
  const lastId = (await maxttemRef.once("value")).val();

  const items = Array.from(new Array(lastId), (x,i) => i+1);
  const actions = items.map( i => limit(() => getItem(i)))

  const result = await Promise.all(actions);
  result.map( item => {
    const { url } = item.val();
    if(url) {
      console.log(url)
    }
  });
  process.exit();
})();