
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0;
  let minimum = array[0];
  for (let i = 1; i < array.length; i++) {
     if (array[i] < minimum)  minimum = array[i];   
  }
  console.log(minimum);
  return minimum;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;
  let maximum = array[0];
  
  for (let i = 1; i < array.length; i++) {
     if (array[i] > maximum )  maximum  = array[i];   
  }
  console.log(maximum);
  return maximum;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0;
  let avrg = 0;
  let summ = 0;
  for (let i = 0; i < array.length; i++) {
     summ = summ + array[i];  
  }
  console.log(summ);
  avrg = summ / array.length ;
  return avrg;
}

