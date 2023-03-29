const callback =(n)=>{
    return n ** 2
}

function cube(callback, n ){
    return callback(n) * n
}

console.log(cube(callback, 3))




const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))


function fuck(titit){
    let finalValue = "";
    for(let i = 0; i < titit; i++){
        finalValue = "Tai kalian" + i 
    }
    return finalValue;
}

console.log(fuck(8));