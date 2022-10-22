console.log("person 1 shows ticket");
console.log("person 2 shows ticket");

// const promiseWifeBingingTickets = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     },3000)
// });

// const getPopcorn = promiseWifeBingingTickets.then((t) => {
//     console.log(`wife: i got the tickets`);
//     console.log(`husband: ok. we should go in.`);
//     console.log(`wife: not yet..i need popcorn too.`);
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`))
// })

// const butter = getPopcorn.then((t) => {
//     console.log(`husband: i got the popcorn`);
//     console.log(`husband: now we should go in.`);
//     console.log(`wife: i need butter on my popcorn`);
//     return new Promise((resolve,reject) => resolve(`${t} butter`))
// });

// butter.then((t) => console.log(t));

const preMovie = async () => {
    const promiseWifeBingingTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000)
    })

    // const getPOPcorn = new Promise((resolve,reject) =>  resolve('popcorn'));

    // const getCoke = new Promise((resolve,reject) =>  resolve('Coke'));

    // const getCandy = new Promise((resolve,reject) =>  resolve('candy'));

    // let ticket = await promiseWifeBingingTickets;

    // let [popcorn,coke,candy] = await Promise.all([getPOPcorn,getCoke,getCandy])
    

    // console.log(`${popcorn} ${coke} ${candy}`);

    let ticket
    try {
        ticket = await promiseWifeBingingTickets;
    } catch (error) {
        ticket = 'sad face'
    }
    return ticket;
};

preMovie().then((t) => console.log(`person 3 shows ${t}`));

console.log("person 4 shows ticket");
console.log("person 5 shows ticket");

