// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('Here is your data');
//             }
//             reject('Request not completed');
//         }, 1000)
//     })
// }

// fakeRequest('/google')
//     .then((data) => {
//         console.log('Done with request');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const colorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

