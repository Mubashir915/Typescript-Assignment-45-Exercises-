// : Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//  by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

let magicians:string[]=['Joker','Harry Potter','Micheal'];

function make_great (magiciansArray: string[]){

for(let i=0; i<magiciansArray.length; i++){

    magicians[i] = 'The Great' + magiciansArray[i]
}
}
function show_magicians(magicians: string []){
    magicians.forEach(element => {
        console.log(element)
        
    });
}
make_great(magicians);
show_magicians(magicians);