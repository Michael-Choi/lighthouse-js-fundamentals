function merge(arr1, arr2){
  // easy way is to concat then run .sort
  //will be doing the more fun way
  //2 pointers one for arr1 and one for arr2. Compare elements then return in new array
  let a1_pointer = 0;
  let a2_pointer = 0;
  let array = [];

//check between both elements at their pointer and append smaller value. Increment the pointer
  while (array.length < (arr1.length + arr2.length)){
    if (arr1[a1_pointer] <= arr2[a2_pointer]){
      array.push(arr1[a1_pointer]);
      a1_pointer++;
    }
    else if (arr1[a1_pointer] > arr2[a2_pointer]){
      array.push(arr2[a2_pointer]);
      a2_pointer++;
    }

    // once one array gets to the end append the remainder of the other array
    else if (arr1[a1_pointer] === undefined){
      for (let i = a2_pointer; i < arr2.length; i++){
        array.push(arr2[i]);
      }
    }
    else if (arr2[a2_pointer] === undefined){
      for (let i=a1_pointer; i < arr1.length; i++){
        array.push(arr1[i]);
      }
    }
  }
  return array;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
