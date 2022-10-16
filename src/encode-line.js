const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  
  const uniqueArray = [...new Set(str)];
  let newStr='';
  
  for(i=0; i<uniqueArray.length; i++){
      if((str.split(uniqueArray[i]).length - 1 ) === 1) {
        newStr +=  uniqueArray[i];
  
      } else {
        newStr += str.split(uniqueArray[i]).length - 1 + uniqueArray[i];
      }
   }
      
return newStr;

}

module.exports = {
  encodeLine
};
