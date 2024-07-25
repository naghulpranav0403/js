function factorial(num){
    let ans=1;
    for(let i=num;i>=2;i--){
        ans*=i;
    }
    return ans;
}
console.log(factorial(7));