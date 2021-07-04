function getResult(data) {

  if(data === 1) return [1];
  if(data === 2) return [1, 2];

  let arr = [];

  for(let i = 2; i < data; i += 1) {
    let isSimple = true;
    for(let j = 2; i / j > 1; j += 1) {

      if (i % j === 0) {
        isSimple = false;
        break;
      }
    }

    if (isSimple) arr.push(i);
  }
  return arr
}



const data = [1000];
console.log(getResult(data));
