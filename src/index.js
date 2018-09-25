module.exports = 
function check(str, bracketsConfig) {
  let matchingOpeningBracket;
  let matchingSimularBracket;
  let stack = [];

  let openingBrackets = ['[', '{', '(','1','3','5'];
  let closingBrackets = [']', '}', ')','2','4','6'];
  let simularBrackets = ['|','7','8'];

  for (let i = 0; i < str.length; i++) {
    if (closingBrackets.indexOf(str[i]) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(str[i])];
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)){
          return false;         
          
      }
    }
    //else if(simularBrackets.indexOf(str[i]) > -1){
      //stack.push(str[i]);
      // matchingSimularBracket = simularBracket[simularBracket.indexOf(str[i])];
      //   if(stack.length != 0 || (stack.pop() == matchingSimularBracket)){
      //     return false;
      // }
      //  return false;
    //}
    else {
      stack.push(str[i])
    }
  };

  return (stack.length == 0);
};