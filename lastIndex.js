function lastIndexOf(arr, target){
  var index = -1;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == target){
      index = i;
    }
  }
  return index;
}
