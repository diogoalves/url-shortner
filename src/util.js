
const test = char => !( /[\x00-\x08\x0E-\x1F\x80-\xFF]/.test(char)) && !/^\p{White_Space}/u.test(char);

const generateUnicodeChars2 = () => {
  const range =Array.from(Array(65536).keys()); //returns keys of an Array with 65536 roles, like [0,1,...,65536]

    return range.reduce( (acc, cur, index) => {
    const c = String.fromCharCode(index);
    if(test(c)) {
      return acc.concat(c);
    } else {
      return acc;
    }
  }, [] );
} 


