const Posts = [
    {title : 'post one', body : 'This is post one', createdAt : new Date().getTime()},
    {title : 'post two', body : 'This is post two', createdAt : new Date().getTime()}
]

let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        for(let i=0;i<Posts.length;i++){
            output += `<li>${Posts[i].title} created ${(new Date().getTime() - Posts[i].createdAt) / 1000} seconds ago</li>`;
        };
        document.body.innerHTML = output
    },1000)
}

// getPosts();

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            Posts.push(post);
            const error = false;

            if(!error){
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        },2000)
    })
    
}

// function create4thPost(post,callback){
//     setTimeout(() => {
//         Posts.push({...post, createdAt : new Date().getTime()});
//         callback();
//     },3000)
// }

// getPosts();

// createPost({title : 'post three', body : 'This is post three'}, getPosts);
// create4thPost({title : 'post four', body : 'This is post four'}, getPosts);


var timer;
var count = 0;
function lastEditedInSecondsAgo() {
    count = 0;
    clearInterval(timer)
    timer = setInterval(() => {
        count++;
        console.log(count);
    },5000)
}

// lastEditedInSecondsAgo();

function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            Posts.pop();

            if(Posts.length){
                resolve();
            } else {
                reject('Array is empty');
            }
        },2000)
    })
}

// createPost({title : 'post three', body : 'This is post three'})
// .then(() => {
//     getPosts();
//     deletePost().then(() => {
//         getPosts();
//         deletePost().then(() => {
//             getPosts();
//             deletePost().then(() => {
//                 getPosts();
//                 deletePost().then(() => {})
//                 .catch((err) => { console.log("Inside catch block ",err)});
//             })
//         }).catch(err =>  console.log(err));
//     }).catch(err =>  console.log(err));
// }).catch(err =>  console.log(err));


