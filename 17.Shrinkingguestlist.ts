let guest_list: string[]= [`Tariq`,`Ali`,`Shammas`];
let not_present : string = `Ali`;
let new_guest  : string = `Sam Altman`;
guest_list[1] = new_guest;
guest_list.unshift(`Bill Gates`,`Elon Mask`,` Ambani`);
console.log(`\nUnfortunately we can not arrange big table , only to people allow`);
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir. ${remove_guest} You are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir ` +  guest_list[i] + `,\nYes you are still invited on tomorrow dinner\nThank You\n`)
}
guest_list.splice(0,2) 
console.log(guest_list)