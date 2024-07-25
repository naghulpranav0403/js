function fibo(num){
    if(num<=1) return num;
    return fibo(num-1)+fibo(num-2);
    
}
function factorial(num){
    let ans=1;
    for(let i=num;i>=2;i--){
        ans*=i;
    }
    return ans;
}
console.log(factorial(7));
console.log(fibo(10));