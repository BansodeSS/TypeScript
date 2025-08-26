/**
 * strings.ts
 * TypeScript Strings Tutorial
 */

// Basic string declaration
let greeting: string = "Hello, TypeScript!";

// String concatenation
let userName: string = "Suhas";
let welcome: string = greeting + " My name is " + userName + ".";

// Template literals
let age: number = 30;
let info: string = `My name is ${userName} and I am ${age} years old.`;

// String methods
let upper: string = greeting.toUpperCase(); // "HELLO, TYPESCRIPT!"
let lower: string = greeting.toLowerCase(); // "hello, typescript!"
let greetingLength: number = greeting.length; // 18
let includesTypeScript: boolean = greeting.includes("TypeScript"); // true
let replaced: string = greeting.replace("TypeScript", "World"); // "Hello, World!"
let splitWords: string[] = greeting.split(" "); // ["Hello,", "TypeScript!"]
let char: string = greeting.charAt(0); // "H"
let index: number = greeting.indexOf("TypeScript"); // 7
let trimmed: string = "   padded string   ".trim(); // "padded string"

// String comparison
let str1: string = "apple";
let str2: string = "banana";
let isEqual: boolean = str1 === str2; // false

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
function reverseString(s: string): string {
    return s.split('').reverse().join('');
}
// Check for Palindrome
function isPalindrome(s: string): boolean {
    const normalized = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}
// First Unique Character in a String
function firstUniqChar(s: string): number {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}

// Longest Common Prefix
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// Valid Anagram
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const count: { [key: string]: number } = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}
// Call all functions with sample inputs
console.log("reverseString('hello'):", reverseString('hello')); // "olleh"
console.log("isPalindrome('racecar'):", isPalindrome('racecar')); // true
console.log("firstUniqChar('leetcode'):", firstUniqChar('leetcode')); // 0
console.log("longestCommonPrefix(['flower','flow','flight']):", longestCommonPrefix(['flower','flow','flight'])); // "fl"
console.log("isAnagram('anagram', 'nagaram'):", isAnagram('anagram', 'nagaram')); // true
