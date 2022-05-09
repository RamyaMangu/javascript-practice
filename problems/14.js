/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    const thresh = Math.floor(numbers.length / 2);
    const map = {};
    for (let i = 0; i < numbers.length; i++) {
       const value = numbers[i];
       map[value] = map[value] + 1 || 1;
       if (map[value] > thresh){
        return value
       }
    };
   return false;
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};