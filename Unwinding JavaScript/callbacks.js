function greet( name, callBack){
    const greeting = "Hello " + name;
    callBack(greeting);
}

function displayGreeting(message){
    console.log(message);
}
greet("Rupayan", displayGreeting);

/*
//callback hell | Pyramid of doom
//layer of callback nesting
getUser(function(user){
    getPosts(user.id, function(posts){
        displayUserInfoAndPost(user, posts, function(){
            console.log("User info and post are successfully displayed");
        });
    });
});
*/