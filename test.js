/**
 * Created by Kirito on 2017/4/28.
 */
function sleep(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time)
    });
}

function fun1() {
    console.log(1)
}

function fun2() {
    console.log(2)
}

function fun3() {
    console.log(3)
}

function fun() {
    sleep(5000).then(function () {
        fun1();
    }).then(function () {
        return sleep(2000)
    }).then(function () {
        fun2();
    }).then(function () {
        return sleep(1000)
    }).then(function () {
        fun3();
    });


    fun1();
    sleep(5000).then(function () {
        fun2();
    }).then(function () {
        return sleep(2000)
    }).then(function () {
        fun3();
    })

    // sleep(fun1, 5000).then(function () {
    //     sleep(fun2, 2000)
    // }).then(function () {
    //     sleep(fun3, 1000)
    // });

}
fun();