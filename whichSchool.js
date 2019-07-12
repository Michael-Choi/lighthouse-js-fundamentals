const whichSchool  = function (age) {
  // Your code in here ...
  var schoolType;
  if (age < 13){
    schoolType = 'Elementary School';
  }
  else if(age < 19){
    schoolType = 'Secondary School';
  }
  else{
    schoolType = 'Lighthouse Labs';
  }
  return schoolType;
}
