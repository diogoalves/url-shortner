import isUrl from 'is-url';
//import urlExists from 'url-exists-deep'; //use this in server side or try easyXDM(iframes)

const encodeTable = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 0,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 6,
  p: 7,
  q: 0,
  r: 1,
  s: 2,
  t: 3,
  u: 4,
  v: 5,
  w: 6,
  x: 7,
  y: 0,
  z: 1,
  '/': 2,
  '-': 3,
  '.': 4,
  '.com': 5,
  'www.': 6,
  '%': 7
}


export const isUrlValid = url => isUrl(url);

export const encodeUrl = url => { 
  const chars = [...url];
  chars.reduce( (acc, cur) => {
    
  })
  let encoded = url.replace('http://','').replace('https://', '');
  console.log(encoded)
  return encoded;
}

export const getProtocol = url => {
  if(url.startsWith('https://')) return 'https://';
  return 'http://';
}

/*
const test = char => !(/[\x00-\x08\x0E-\x1F\x80-\xFF]/.test(char)) && !/^\p{White_Space}/u.test(char);

const generateUnicodeChars3 = () => {
  const range = Array.from(Array(65536).keys()); //returns keys of an Array with 65536 roles, like [0,1,...,65536]

  return range.reduce((acc, cur, index) => {
    const c = String.fromCharCode(index);
    if (test(c)) {
      return acc.concat(c);
    } else {
      return acc;
    }
  }, []);
}

const generateUnicodeChars = () => {
  let ret = [];
  for (i = 0; i < 65536; i++) {
    const c = String.fromCharCode(i);
    if (test(c)) {
      ret.push(c);
    }
  }
  return ret;
}
*/