module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closedBrackets = [];
  const temp = []
  
  bracketsConfig.forEach(el => {
      openBrackets.push(el[0]);
      closedBrackets.push(el[1]);
  });
  
  for (let i = 0; i < str.length; i++) {
      const el = str[i];
  
      if (closedBrackets.indexOf(el) !== -1) {
          const openContains = openBrackets[closedBrackets.indexOf(el)];
          if (temp.length === 0 || (temp.pop() !== openContains)) {
              return false;
          }
      } else {
          temp.push(el);
      }
  }
  
  if (temp.length === 0) {
      return true;
  } else {
      return false;
  }  
}
