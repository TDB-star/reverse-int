module.exports = function reverse (n) {
    const reversedStringArray = n.toString().split('').reverse().join('');
    return parseInt(reversedStringArray);
}
