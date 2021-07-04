const levels = [];

function getResult(data) {

  let queue = [];
  let values = [];

  queue.push(data);
  while(queue.length > 0){
    let tempNode = queue.shift();
      values.push(tempNode.value);

    if (tempNode.children){
      for(let i = 0; i < tempNode.children.length; i += 1) {
        queue.push(tempNode.children[i]);
      }

    }
  }
  return values;
}



const data = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 4,
          children: undefined
        },
        {
          value: 5,
          children: undefined
        },
        {
          value: 6,
          children: undefined
        },
      ]
    },
    {
      value: 3,
      children: [
        {
          value: 7,
          children: undefined
        },
        {
          value: 8,
          children: undefined
        },
        {
          value: 9,
          children: undefined
        },
      ]
    },
  ]
};
console.log(getResult(data));
