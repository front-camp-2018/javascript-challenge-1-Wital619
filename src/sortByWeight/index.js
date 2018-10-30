/* eslint-disable-next-line */
const getWordWeight = word => {
  return word.split('').reduce((letterAcc, letterElem) => {
    return parseInt(letterAcc) + parseInt(letterElem);
  });  
};

export const sortByWeight = arr => {
  return arr.sort((firstWord, secondWord) => {
    return getWordWeight(firstWord) > getWordWeight(secondWord);
  });
};