// Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.

function makeSandwiches (item: string[]){
    console.log('\nMaking Sandwi with');

    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your Sandwitch !\n');
}
makeSandwiches(['Spicy Chilli','Cheese','Butter']);
makeSandwiches(['Peanut Butter','Cheese','Jelly']);
makeSandwiches(['Beef Qeema','Apple Jam','Chicken Tikka']);
