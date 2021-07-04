
function getResult(data) {

  console.log(data.value)

  if (data.children) {
    for (let i = 0; i < data.children.length; i += 1) {
      const child = data.children[i];
      getResult(child);
    }
  }

}


const data = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: [{
            value: 3,
            children: undefined
          },]
        },
      ]
    },
    {
      value: 4,
      children: undefined
    },
    {
      value: 5,
      children: undefined
    }
  ]
};
console.log(getResult(data));
