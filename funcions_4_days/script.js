function square() {
    console.log('kontol')
  }
  
  square()


  function addThowNumber(){
    let numberOne = 10
    let numberTwo = 20
    let sum = numberOne + numberTwo

    console.log(sum)
  }

  addThowNumber()





  function printFullName(){
    let firsName = 'aditya'
    let lastName = 'baharma'
    let spase = ' '
    let fullname = firsName + spase + lastName

    console.log(fullname)
  }

  printFullName()

  //Fungsi juga dapat mengembalikan nilai, jika suatu fungsi tidak mengembalikan nilai, nilai fungsi tidak 
  //terdefinisi. Mari kita tulis fungsi di atas dengan return. Mulai sekarang, kami mengembalikan nilai ke fungsi alih-alih mencetaknya

  function returnName(){
    let firsName = 'aditya'
    let lastName = 'baharma'
    let spase = ' '
    let fullname = firsName + spase + lastName
    
    return fullname
  }

  console.log(returnName());


  //Function with two parameters

  function sumTwoNumber(one , two){
    let sum = one + two

    return sum
  }

  console.log(sumTwoNumber(4,9))



  function printFullTwoNumber(firstName,lastName){
    return `${firstName} ${lastName}`
  }
  console.log(printFullTwoNumber('aditya','hahah'))

  //Function with many parameters
  function sumArrayValue(arr){
    let sum = 0 
    for(let i = 0 ; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
  }
  const numbers = [1,2,3,4,5,17]

  console.log(sumArrayValue(numbers))


  const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
  }

console.log(areaOfCircle(10))

const loop = (test) =>{
    let sum = 0
    for(let i = 0; i < test ; i++ ){
        return sum
    }
}