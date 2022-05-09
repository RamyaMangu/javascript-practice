/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let i = 0
    str = str.replace(/\s+/g, '')
    str = str.toLowerCase()
    let j = str.length -1
    while(true){
        if(str.charAt(i) == str.charAt(j)){
            i = i +1
            j = j- 1
        }
        else{
            return false
        }
        if (str.length % 2 == 0){
            if((i+1) == j)
            {
                return true
            }
        }
        else{
            if(i == j)
            {
                return true
            }
        }
    }
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};