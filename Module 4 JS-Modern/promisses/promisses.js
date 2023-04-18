function tests(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const error = false;
            
            if(error){
                reject('Error...');
            }else{
                resolve('This promise was successfully resolved');
            }
        },2000)
        
    })
}


async function tests2 (){
    await tests().then(function(res){
        alert(res);
    }).catch(function(err){
        alert(err);
    });
    alert("Hello");
}

tests2();