
function getResult(data) {

  for(let l = data.length - 2; l >= 0; l -= 1) {

   for(let r = l + 1; r < data.length; r += 1){

     if (data[r - 1] > data[r]) {
       const temp = data[r];
       data[r] = data[r - 1];
       data[r - 1] = temp
     } else {
       break
     }

   }

  }

  return data;
}


const data = [5, 0, 123, 23,1, 123123,];
console.log(getResult(data));
