// store a person name in lower case
let personName: string ="Muhammad Mubashir"
console.log("lowercase:", personName.toLowerCase());

// store a person name in upper case 
console.log("uppercase:", personName.toUpperCase());

// store a person name in title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));