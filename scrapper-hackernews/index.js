const firebase = require("firebase");
const pMap = require('p-map');

const HN_DATABASE_URL = 'https://hacker-news.firebaseio.com';
const MAX_CONCURRENT_PROMISES = 2000;


const app = firebase.initializeApp({ databaseURL: HN_DATABASE_URL }, 'hackernews');
const db = app.database();
const maxttemRef = db.ref("v0/maxitem");

const process_windows = async (actions) => {
  console.log("processing " + actions.length + "actions")
  const result = await Promise.all(actions);
  console.log("PROCESSOU")
  result.map(item => {
    const { url } = item.val();
    if (url) {
      console.log(url)
    }
  });
}

(async () => {
  const lastId = (await maxttemRef.once("value")).val();
  console.log(lastId)

  const getItem = async itemId => {
    const result = await db.ref(`v0/item/${itemId}`).limitToLast(1).once("value");
    if(result && result.val() &&  result.val().url ) {
      console.log(result.val().url )
    }
  }

  const WINDOW_SIZE = 5000;
  const WINDOWS_QTY = Math.ceil(lastId/WINDOW_SIZE);
  for(var w=0; w<WINDOWS_QTY; w++) {
    const items = Array.from(new Array(WINDOW_SIZE), (x, i) => i + 1 + (w*WINDOW_SIZE));
    await pMap(items, getItem, { concurrency: 1000 });
  }

  process.exit();
}) ();