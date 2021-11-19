var inp = document.getElementById("inp");
function allotval(num) {
    // console.log(inp)
    inp.value += num
    var lastChr = inp.value[inp.value.length - 1]
    var scndlastChr = inp.value[inp.value.length - 2]
    
    var operator = ["+", "-", "*", "/"];
    if (operator.indexOf(lastChr) !== -1 && operator.indexOf(scndlastChr) !== -1) {
        delLast()
    }
}
function deletall() {
    inp.value = ""
}
function delLast() {
    inp.value = inp.value.slice(0, inp.value.length - 1)
}
function calculate() {
    inp.value = eval(inp.value);

}