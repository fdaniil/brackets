module.exports = function check(str, bracketsConfig) {
    let stack = [];
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        let arr = bracketsConfig.find(a => a.find(x => x == element))
        if (!arr) {
            return false;
        }
        if (arr[1] == element && stack[stack.length - 1] == arr[0]) {
            stack.pop();
        }  else if (arr[0] == element) {
            stack.push(element);
        }  else {
            return false;
        }

    }

    return stack.length == 0;
}
