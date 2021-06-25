//parenthesesChecker() takes in a string and returns true if all parentheses match and are properly closed
let str = "hello() ((world(ana)))";

const parenthesesChecker = (str) => {
    //declaring a stack where we will add and remove parentheses when they are properly closed and nested
    let stack = [];

    //spliting the passed in string to make each character its own string and check each parenthesis individually
    let newStr = str.split('');

    //iterate through the new string and check for every parenthesis
    for (let i = 0; i < newStr.length; i++) {
        //if the loop encounters an opening parenthesis, it'll push it onto the stack
        if (newStr[i] === '(') {
            stack.push('(')

        //if string is a closing parenthesis, it'll check against another conditional
        } else if (newStr[i] === ')') {
            if ( stack.length > 0) {
                //if loop encounters a closing parenthesis and the stack length is greater than 0, it will remove the opening parenthesis meaning it found its match
            stack.pop()
            } else {
                //return false because it means that we encopunter a closing parenthesis and there are no opening parenthesis in the stack to match it
                return false
            }
        } 
    }  
    //return false or true based on if there are any elements left in the stack
    return stack.length > 0 ? console.log(false) : console.log(true);
}

parenthesesChecker(str)