

function getResult(data) {
  let canFinish = false;
  while(!canFinish) {
    canFinish = true;
    for(let r = 1; r < data.length; r += 1) {
      const lItem = data[r - 1];
      const rItem = data[r];
      if (lItem > rItem) {
        data[r - 1] = rItem;
        data[r] = lItem;
        canFinish = false;
      }
    }
  }


  return data;
}


const data = [0, 1, 3,3, 4];
console.log(getResult(data));
