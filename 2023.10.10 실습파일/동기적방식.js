let pay = 0;
console.log("짜장면 주문")
console.log("8000원")
pay += 8000

console.log("eatting~~")

const order = () => {
    setTimeout(() =>{
        console.log("콜라주문")
        pay += 2000;
        callback();
    }, 2000)
    
}

const payment = () =>{
    console.log(`계산할 금액은 ${pay}`)
}

order(payment)
