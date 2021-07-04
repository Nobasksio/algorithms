function getResult(data) {

  const arr = [];

  for(let i = 0; i < data.length; i += 1) {

    let isSimple = true;
    const number = data[i];
    for(let j = 2; number / j > 1; j += 1) {

      if (number % j === 0) {
        isSimple = false;
        break;
      }
    }

    if (isSimple) arr.push(number);
  }

  return arr

}



const data = [1, 3, 4, 5, 6, 7, 25, 23, 100, 333, 101];
console.log(getResult(data));
