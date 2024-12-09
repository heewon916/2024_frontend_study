const user = {
    name: "mike",
    showName: function() {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();  // hello, mike

let fn = user.showName; // this <- fn 
fn(); // hello, undefined

fn.call(user); // hello, mike 
fn.apply(user); // hello, mike 

let boundFn = fn.bind(user);
boundFn(); // hello, mike
