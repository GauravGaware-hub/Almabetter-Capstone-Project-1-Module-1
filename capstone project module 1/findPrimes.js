//Logic Building Coding Questions


function findPrimes(n) {

    if (n < 2) return "There are no prime numbers less than 2"

    let primes = [];

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) primes.push(i);
    }

    return primes;
}


console.log(findPrimes(20))


