/**
 * Created by Kirito on 2017/6/5.
 */
function add() {
    var sum = 0;
    for (var i = 0; i < 1000000; i++) {
        sum += i;
    }
    return sum;
}

function tointeger() {
    var myVar = "3.14159";
    myVar = ~~myVar;  //  to integer
    return myVar;
}
function tointeger2() {
    var myVar = "3.14159";
    myVar = myVar.toInteger;  //  to integer
    return myVar;
}


function funtime(func) {
    var start = new Date().getTime();
    func();
    var end = new Date().getTime();
    return (end - start);
}

(function () {
    console.log(funtime(add) + ' ms');
    console.log(funtime(tointeger) + ' ms');
    console.log(funtime(tointeger2) + ' ms');
}())
