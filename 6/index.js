function getResult(data) {

  const arr = [];

  const dict = {
    '{': {
      left: true,
      pair: '}'
    },
    '}': {
      left: false,
      pair: '{'
    },
    '(': {
      left: true,
      pair:')'
    },
    ')': {
      left: false,
      pair:'('
    },
    '[': {
      left: true,
      pair:']'
    },
    ']': {
      left: false,
      pair:'['
    },
  }

  for(let i = 0; i < data.length; i += 1) {
    const simb = data[i];
    if (dict[simb]) {
      if (!dict[simb].left) {
        if (arr[arr.length - 1] === dict[simb].pair) {
          arr.pop()
        } else {
          return false
        }
      } else {
        arr.push(simb)
      }
    }
  }
  return arr.length === 0;
}



const data = `[{}]`;
console.log(getResult(data));
