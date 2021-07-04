
function getResult(data) {

  for(let l = data.length - 2; l >= 0; l -= 1) {

    const item = data[l];
    let indexMemo = l;

     for(let r = l + 1; r < data.length; r += 1){
       if (item > data[r]) {
         indexMemo = r;
         data[r - 1] = data[r];
       } else {
         break
       }
     }

   data[indexMemo] = item;
  }

  return data;
}


const data = [5, 1, 213, 11,0, 123, 23,1, 123123, 2133];
console.log(getResult(data));
