let cars : string = "Subaru";
// Test 1 Equality comparison is true

console.log("Is car == 'Subaru'? I predict true");
console.log(car =='Subaru');

// Test 2: Strict Equality Comparison (True)
console.log("Is car === 'Subaru'? I predict true");
 console.log(car === 'Subaru'); // True

//  Test 3: Inequality Comparison (False)
console.log("Is car != 'Subaru'? I predict false");
 console.log(car != 'Subaru') // False

// Test 4: Strict InEquality Comparison (False)
console.log("Is car !== 'Subaru'? I predict false");
 console.log(car !== 'Subaru') // False

 //  Test 5: Less than Comparison (False)
console.log("Is car < 'Subaru'? I predict false");
 console.log(car < 'Subaru') // False

  //  Test 6: Greater than Comparison (False)
console.log("Is car > 'Subaru'? I predict false");
console.log(car > 'Subaru') // False

  //  Test 7: Less than or Equal Comparison (True)
  console.log("Is car <= 'Subaru'? I predict true");
  console.log(car <= 'Subaru') // true

    //  Test 8: Greater than or Equal Comparison (True)
    console.log("Is car >= 'Subaru'? I predict true");
    console.log(car >= 'Subaru') // true

     //  Test 9: Checking truthiness (True)
     console.log("Is car? I predict true");
     console.log(car); // true (non string is  truthy)

     //  Test 10: Checking Falsiness (false)
     console.log("Is !car ? I predict false");
     console.log(!car); // false (negation of a truthy value)