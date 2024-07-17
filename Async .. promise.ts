// Promises: always contain (resolve, reject)
// resolve ka method .then
// reject ka method .catch


// const returnMoney = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('I have No money');
//     }, 3000);
// });
// returnMoney.then((value) => {
//     console.log(value);
//     console.log('Thankx For returning Money');
// }).catch((value) => {
//     console.log(value);
//     console.log("Sorry I'm unable to return money");
// });

function washing() {
    console.log("Washing Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Washing Done!')
        }, 5000);
    });
}
function soaking() {
    console.log("Soaking Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Soaking Done!')
        }, 4000);
    });
}
function drying() {
    console.log('Drying Started...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying Done!");
        }, 3000);
    })
 }
// washing().then((value) => {
//     console.log(value);
//     return soaking();
// })
// .then ((value) => {
//     console.log(value)
//     return drying();
// })
// .then((value) => {
//     console.log(value);
// })

// By Using await:
async function runWashingMachine () {
    const result1 = await  washing ();
    console.log(result1);
    const result2 = await soaking();
    console.log(result2);
    const result3 = await drying();
    console.log(result3);
}

runWashingMachine();