/* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
 */

const numbers = [2, 4, 5, 6];

const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter((item) => {
    return item % 2 === 0;
  });
};
getEvenNumbers(numbers);
