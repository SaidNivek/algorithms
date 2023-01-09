function sameFrequency(num1, num2){
  if (num1.length !== num2.length) {
      return false
  }
  let counter1 = {}
  let counter2 = {}
  for(let num of num1.toString()) {
      counter1[num] = (counter1[num] || 0) + 1
  }
  for(let num of num2.toString()) {
      counter2[num] = (counter2[num] || 0) + 1
  }

  for(let key in counter2) {
    if(!(key in counter1)) {
        return false
    }
    if(counter2[key] !== counter1[key]) {
        return false
    }
  }
  return true
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false