function fibonacci(number) {
    let previous; 
    let current = 1; 
    let next = 0;
      
    for(i = 0; i < number; i++) {
        previous = next; 
        next = current + next; 
        current = previous
    }
return next  
}

const fibo1 = fibonacci(1); 
const fibo2 = fibonacci(5);
const fibo3 = fibonacci(8);
const fibo4 = fibonacci(9);

console.log([fibo1, fibo2, fibo3, fibo4])