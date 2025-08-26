/**
 * strings.ts
 * TypeScript Strings Tutorial
 */
// Basic string declaration
var greeting = "Hello, TypeScript!";
// String concatenation
var userName = "Suhas";
var welcome = greeting + " My name is " + userName + ".";
// Template literals
var age = 30;
var info = "My name is ".concat(userName, " and I am ").concat(age, " years old.");
// String methods
var upper = greeting.toUpperCase(); // "HELLO, TYPESCRIPT!"
var lower = greeting.toLowerCase(); // "hello, typescript!"
var greetingLength = greeting.length; // 18
var includesTypeScript = greeting.includes("TypeScript"); // true
var replaced = greeting.replace("TypeScript", "World"); // "Hello, World!"
var splitWords = greeting.split(" "); // ["Hello,", "TypeScript!"]
var char = greeting.charAt(0); // "H"
var index = greeting.indexOf("TypeScript"); // 7
var trimmed = "   padded string   ".trim(); // "padded string"
// String comparison
var str1 = "apple";
var str2 = "banana";
var isEqual = str1 === str2; // false
// Usage
console.log("greeting:", greeting);
console.log("welcome:", welcome);
console.log("info:", info);
console.log("upper:", upper);
console.log("lower:", lower);
console.log("greetingLength:", greetingLength);
console.log("includesTypeScript:", includesTypeScript);
console.log("replaced:", replaced);
console.log("splitWords:", splitWords);
console.log("char:", char);
console.log("index:", index);
console.log("trimmed:", trimmed);
console.log("isEqual:", isEqual);
// Reverse a String
function reverseString(s) {
    return s.split('').reverse().join('');
}
// Check for Palindrome
function isPalindrome(s) {
    var normalized = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}
// First Unique Character in a String
function firstUniqChar(s) {
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}
// Longest Common Prefix
function longestCommonPrefix(strs) {
    if (strs.length === 0)
        return "";
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "")
                return "";
        }
    }
    return prefix;
}
// Valid Anagram
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var count = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char_1 = s_1[_i];
        count[char_1] = (count[char_1] || 0) + 1;
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var char_2 = t_1[_a];
        if (!count[char_2])
            return false;
        count[char_2]--;
    }
    return true;
}
// Call all functions with sample inputs
console.log("reverseString('hello'):", reverseString('hello')); // "olleh"
console.log("isPalindrome('racecar'):", isPalindrome('racecar')); // true
console.log("firstUniqChar('leetcode'):", firstUniqChar('leetcode')); // 0
console.log("longestCommonPrefix(['flower','flow','flight']):", longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log("isAnagram('anagram', 'nagaram'):", isAnagram('anagram', 'nagaram')); // true
