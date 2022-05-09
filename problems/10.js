/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    let mod = (str.length)/2;
    if (str.length % 2 == 0){
        fh = str.substr(0 , (mod))
        sh = str.substr(mod, (str.length -1))
        return (fh.toUpperCase() + sh.toLowerCase())
    }
    else{
        fh = str.substr(0 , (mod))
        mid = str.charAt(mod)
        sh = str.substr(mod + 1, (str.length -1))
        return (fh.toUpperCase() + mid.toLowerCase()+ sh.toLowerCase())
    }
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};