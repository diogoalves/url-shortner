import isUrl from 'is-url';
//import urlExists from 'url-exists-deep'; //use this in server side or try easyXDM(iframes)
import a from './unicodeEncoder';

const encodeSymbols = {
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

const encodeBinary = {
  0: '000',
  1: '001',
  2: '010',
  3: '011',
  4: '100',
  5: '101',
  6: '110',
  7: '111'
}

export const isUrlValid = url => isUrl(url);

export const getProtocol = url => {
  if(url.startsWith('https://')) return 'https://';
  return 'http://';
}

export const encodeUrl = url => { 
  return unicodeEncode(packageInTwoBytes(encodeBits(splitInChars(preEncode(url)))))
}

const preEncode = url => 
  url
    .replace('http://','')
    .replace('https://', '')
    .replace('.com', 'f')
    .replace('www.', 'g');
  
const splitInChars = string => [...string];

const encodeBits = chars => 
  chars.reduce( (acc, cur) => acc += encodeBinary[ encodeSymbols[cur] ], '');

const packageInTwoBytes = encoded => 
  encoded
    .match(/.{1,16}/g)
    .map( e => e.padEnd(16, '0'));


const unicodeEncode = packages => 
  packages
    .map( e=> a[parseInt(e,2)])
    .reduce( (acc, cur) => acc.concat(String.fromCharCode(cur)), '' );

/*
const test = char => !(/[\x00-\x08\x0E-\x1F\x80-\xFF]/.test(char)) && !/^\p{White_Space}/u.test(char);

const generateUnicodeChars2 = () => {
  let ret = [];
  let i = 0;
  while(ret.length < 65536) {
    const c = String.fromCharCode(i);
    if (test(c)) {
      ret.push(i);
    }
    i++;
  }
  return ret;
}

*/