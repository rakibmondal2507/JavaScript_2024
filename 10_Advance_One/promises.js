const promiseOne = new Promise(function (resolve, reject) {
    //Do async task
    //DB calls, crytography, network
    setTimeout(function () {
        console.log('Async task is complete')
      },1000)
  });

  promiseOne.then(function () {
    console.log('Promise consumed')
    })

    new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Async task 2');
            resolve();
          },1000)
      }).then(function () {
        console.log('Async 2 resolved');
        })

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function () {
        resolve({username: 'Chai', email: "chai@example.com"})
      },1000)
})

promiseThree.then(function (user) {
    console.log(user);
  })

  const promiseFour =  new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username: 'Rakib', password:'134'})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
    }) 

    promiseFour.then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch((error) => {
        console.log(error);
    }).finally(() => console.log("Promise is either resolved or rejected"))


    const promiseFive = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let error = true
            if(!error){
                resolve({username: 'JS', password:'134'})
            }else{
                reject('ERROR: js went wrong')
            }
        }, 1000);
      })

      async function consumePromiseFive (){ 
       try {
        const resoponse = await promiseFive
        console.log(resoponse);
       } catch (error) {
        console.log(error);
       }
    }

       consumePromiseFive()
