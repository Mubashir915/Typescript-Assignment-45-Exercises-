// Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, 
// return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of 
// the original names and one array with the Great added to each magician’s name.

let magicians:string[]=['Joker','Harry Potter','Micheal'];

function copyArray(arr: string[]){
     [...arr]
}


function make_great (magiciansArray: string[]){

for(let i=0; i<magiciansArray.length; i++){

    magicians[i] = 'The Great' + magiciansArray[i]
}
}
function show_magicians(magicians: string []){

    magicians.forEach(element => {
        console.log(element);
        
    });
}
const copymagicianarray = copyArray(magicians)

make_great(magicians);
console.log('This is my original array:');

show_magicians(magicians);
console.log('\n\nThis is the modified copy of array:');
show_magicians(magicians);