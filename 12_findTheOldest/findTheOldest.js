const findTheOldest = function(peopleArr) {
    const currentYear = new Date().getFullYear();
    let oldest = peopleArr[0];
    let oldestAge = 0;

    for (let i = 0; i < peopleArr.length; i++) {
        const person = peopleArr[i];
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        
        if (age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
    }
    
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
