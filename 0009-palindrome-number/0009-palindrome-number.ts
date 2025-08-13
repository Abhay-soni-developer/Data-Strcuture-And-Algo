function isPalindrome(x: number): boolean {
    const str1 = String(x);
    const str2 = str1.split("").reverse().join("");
    if (str1 === str2) return true;
    return false;
}
