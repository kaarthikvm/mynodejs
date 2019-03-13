var message = "";

mypromise = new Promise(function(resolve, reject){
                            setTimeout(function(){
                                        resolve("hello");
                                         //reject("helloerr");
                                       }, 2000)
                        })


mypromise.then(function(result){
                console.log(result)

                return new Promise(function(resolve, reject){
                                        setTimeout(function(){
                                        //resolve("world");
                                         reject("worlderr");
                                       }, 2000)
                                   })

        },function(err){
             console.log("error occured as ",err)
        }).then(function(result){
                 console.log(result);
                },function(err){
                 console.log(err);
                });
