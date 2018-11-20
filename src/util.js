import isUrl from 'is-url';
//import urlExists from 'url-exists-deep'; //use this in server side or try easyXDM(iframes)

export const isUrlValid = url => isUrl(url);

export const getProtocol = url => {
  if(url.startsWith('https://')) return 'https://';
  return 'http://';
}

