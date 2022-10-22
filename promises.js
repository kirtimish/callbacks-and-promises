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

  //promise.all
  
  // const promise1 = Promise.resolve('hello World');
  
  // const promise2 = 10;
  
  // const promise3 = new Promise((resolve,reject) =>
  
  //  setTimeout(resolve,2000,'goddbye')
  
  // );
  
  // const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
  
  // .then(res => res.json());

  // Promise.all([promise1,promise2, promise3, promise4])
  
  // .then(values => console.log(values));
  
  const user = {
    username : "kirti" ,
    lastactivityTime : new Date().getTime()
  }
  
  function updatelastactivityTime(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log(Posts,((new Date().getTime() -user.lastactivityTime) / 1000) + " seconds ago");
        if(user){
          resolve();
        } else {
          reject('Array is empty');
        }
      },1000)
    })
  }
  
  
  
//   createPost({title : 'post three', body : 'This is post three', createdAt: new Date().getTime()})
  
//   .then(() => {
  
//     updatelastactivityTime();
  
//   }).catch(err => console.log(err));
  
  
  
//   Promise.all([createPost, updatelastactivityTime])
  
//   .then(() => {
  
//     deletePost().then(() => {
  
//       getPosts();
  
//       console.log(Posts);
  
//     })
  
//     .catch((err) => { console.log("Inside catch block ",err)});
  
//   });

async function display() {
    try {
        await createPost({title : 'post three', body : 'This is post three', createdAt: new Date().getTime()});
        getPosts();
        await deletePost();
        getPosts();
        await updatelastactivityTime();
    }catch(err) {
        console.log(err);
    }
}

display();