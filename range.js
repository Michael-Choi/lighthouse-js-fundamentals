function range(start, end, step){
  var arr = [];
  if (start === null || end === null || step === null || start > end || step <= 0){
    return arr;
  }

  else{
    for (let i = start; i <= end; i += step){
      arr.push(i);
    }
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
