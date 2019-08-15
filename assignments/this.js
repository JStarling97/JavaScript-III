/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding is the default binding, It refers to the window context. 
* 2. Implicit Binding refers to the left of the dot.
* 3. Explicit Binding happens when .call() .apply() or .bind() is used in a function. You explicitly pass 
in a this context to call().
* 4. New Binding refers to the specific instance of an object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function levelUp(lvl) {
    alert(this);
    return lvl;
}
levelUp("You've Reached Level 10");

// Principle 2

// code example for Implicit Binding

const myObj = {
    myCar: '2019 Ford Focus RS',
    speedMph: function(mph) {
        console.log(`My car is a ${this.myCar}, and it goes ${mph} in 5.7 seconds!`);
        console.log(this);
    }
};
myObj.speedMph(62);

// Principle 3

// code example for New Binding

function YourSong(fav) {
    this.name = "Elton John";
    this.fav = fav;
    this.speak = function() {
        console.log(`Who is your ${this.fav}? My fav singer is ${this.name}`);
        console.log(this);
    };
}
const name = new YourSong ('Fav singer');

name.speak();

// Principle 4

// code example for Explicit Binding

const me = {
    name: 'Joshua Starling',
    city: 'Hamilton',
    favoriteFood: 'Steak'
}

const thingsILike = ['Gaming', 'Programming', 'Movies']

function aboutMe(sub1, sub2, sub3) {
    this.name = me.name;
    this.city = me.city;
    this.favoriteFood = me.favoriteFood;
    return `Hello, My name is ${this.name}, I live in ${this.city}, and i enjoy
    doing ${sub1}, ${sub2}, and ${sub3}. I love to eat ${this.favoriteFood}.`
}

aboutMe.call(thingsILike[0],thingsILike[1],thingsILike[2]);
