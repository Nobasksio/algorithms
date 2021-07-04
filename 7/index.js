function getResult(data) {

  if(data === 1) return [1];
  if(data === 2) return [1, 2];

  let arr = [2];

  for(let i = 3; i < data; i += 1) {
    let isSimple = true;

    for(let j = 0; j < arr.length; j += 1) {
      if (i % arr[j] === 0) {
        isSimple = false;
        break;
      }
    }
    if (isSimple) arr.push(i);
  }

  return [1, ...arr]
}



const data = [1000];
console.log(getResult(data));
