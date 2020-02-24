module.exports = function reverse (n) {
    let str = n.toString();
    if (n < 0) {
        str = str.slice(1, str.length);
    }
    return str.split('').reverse().join(''); 
};
