function log(value){
    console.log(value);
};

log('1');

setTimeout(() => {
    log('setTimeout 1');
    Promise.resolve().then(() => {
        log('promise setTimeout')
    })
}, 0);

setTimeout(() => {
    log('setTimeout 2')
}, 0);

Promise.resolve().then(() => {
    log('promise 1')
});

Promise.resolve().then(() => {
    log('promise 2')
});

log('4');

// 1 - 4 - promise 1 - promise 2 - setTimeout 1 - promise setTimeout - setTimeout 2
