
function getResult(data) {

  for(let l = 0; l < data.length; l += 1) {

    let max = data[l];
    let maxIndex = l;

    for(let j = l + 1; j < data.length; j += 1){

      if (data[j] < max) {
        maxIndex = j;
      }
    }

    const temp = data[l];

    data[l] = data[maxIndex];
    data[maxIndex] = temp;

  }

  return data;
}


const data = [1, 1,2131,3,5,2, 1231,6];
console.log(getResult(data));
