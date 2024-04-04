let guest_list : string[]= [`Tariq `,`Ali`,`Shammas`];
let not_present : string = `Ali`;
let new_guest : string = `Sam Altman`;
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir` + guest_list[i] + `,\nWe are iniviting you on dinner tomorrow,\n\nThank You`)
}
guest_list.unshift(`Elon Mask`,`Bill Gates`,`Ambani`);
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir` + guest_list[i] + `,\nWe are iniviting you on dinner tomorrow,\n\nThank You`)
}
