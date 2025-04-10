const fibonacci = function(n) {
    // Convert string to number if needed
    n = Number(n);
    
    // Handle negative numbers
    if (n < 0) {
        return "OOPS";
    }
    
    // Handle 0th case
    if (n === 0) {
        return 0;
    }
    
    // Handle 1st and 2nd cases
    if (n === 1 || n === 2) {
        return 1;
    }
    
    // Calculate fibonacci for n > 2
    let prev = 1;
    let curr = 1;
    
    for (let i = 3; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
