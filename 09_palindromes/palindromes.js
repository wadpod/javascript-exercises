const palindromes = function (word) {
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (cleanedWord === cleanedWord.split('').reverse().join('')) {
        return true;
    }
    else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
