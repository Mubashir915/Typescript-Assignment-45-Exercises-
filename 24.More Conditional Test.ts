let car: string= "Subaru";
let age :number = 25;
let numbers: number[]= [1,2,3,4]; 

//  String Test :

// Test 1 Equality  (True)

console.log("Is car == 'Subaru'? I predict true");
console.log(car =='Subaru'); // True (case insensitive)

// Test 2: Strict Equality (False)
console.log("Is car === 'Subaru'? I predict False");
 console.log(car === 'Subaru'); // False (case sensitive)

//  Test 3: Inequality (True)
console.log("Is car != 'Subaru'? I predict True ");
 console.log(car != 'Subaru') //True 

// Test 4:  InEquality  (False)
console.log("Is car !== 'Subaru'? I predict false");
 console.log(car !== 'Subaru') // False (case sensitive)

 //  Test 5: Lowercase conversion (True)
console.log("Is === car.toLowerCase()? I predict false");
 console.log(car.toLowerCase()); // True

  //  Test 6: Lowercase conversion  (False)
console.log("Is car ===  car.toLowerCase()? I predict false");
console.log(car === car.toLowerCase()); // False

// Numerical test

 //  Test 7: Equality (True)
  console.log("Is age == 25 ? I predict true");
  console.log(age == 25); // true

  //  Test 8: Inequality (false)
  console.log("Is age != 30 ? I predict false");
  console.log(age != 30); // false

    
     //  Test 9: Greater than  (False)
     console.log("Is age > 30 ? I predict false.");
     console.log(age > 30);// false 

      
     //  Test 10: Less than or equal (True)
     console.log("Is age <=25 ? I predict True.");
     console.log(age <=25);// True 

    //  Logical operators

    //  Test 11 And (True)
    console.log("Is age > 20 && age < 30? I predict True");
    console.log(age > 20  && age < 30); //true (both condition meet)

    //  Test 12 OR (false)
     console.log ("Is age >30 || age <18? I predict false");
     console.log(age >30 || age <18); //False(neithe rcondition meet)

    //  Array Test

    //  Test 13 : In Array (True)
    console.log('Is 3 in numbers? I predict true.');
    console.log(3 in number);// true (check for index existence)

    //  Test 14 : Not In Array (false)
    console.log('Is 5 not in numbers? I predict True.');
    console.log(5 in number); // true (negation for "in" operator)