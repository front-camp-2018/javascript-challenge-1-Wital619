/* eslint-disable-next-line */
export const doubleNum = num => {
  const str = num.toString();
  const strPart1 = str.slice(0, str.length / 2);
  const strPart2 = str.slice(str.length / 2);
		
  return parseInt(strPart1) === parseInt(strPart2) ? num : num * 2;
};









