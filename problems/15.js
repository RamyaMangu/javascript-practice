/**
 * Problem 15: FizzBuzz
 * 
 * Given a number, return a array that counts up to that number BUT
 *  If a number is divisible by 3, replace it with "Fizz",
 *  If a number is divisible by 5, replace it with "Buzz",
 *  If a number is divisible by 3 and 5, replace it with "FizzBuzz"
 * 
 * @example 3 -> [1, 2, "Fizz"]
 * @example 5 -> [1, 2, "Fizz", 4, "Buzz"]
 * @example 15 -> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
*/
function problem(number) {
    let array = []
    for (let i = 1; i <= number; i++){
        if(i % 15 == 0 ){
            array.push("FizzBuzz")
        }
        else if(i % 5 == 0){
            array.push("Buzz")
        }
        else if(i % 3 == 0){
            array.push("Fizz")
        }
        else{
            array.push(i)
        }
    }
    return array
}

const tests = [
    [3, [1, 2, "Fizz"]],
    [5, [1, 2, "Fizz", 4, "Buzz"]],
    [17, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17]]
]

module.exports = {problem, tests};