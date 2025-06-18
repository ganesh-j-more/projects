// Operators And Conditional Statement in Javascript
// 1} Arithmetic Opearator 
  
/* let a = 5;
 let b = 2;

 console.log("a = ",a, "b = ",b);
 console.log("a + b =", a + b);
 console.log("a - b =", a - b);
 console.log("a * b =",a * b);
 console.log("a / b =",a / b);
*/

  // Advance operators in Arithmetic operators
    /*
    1) Modeulus Operator
      let a = 5;
     let b = 2;

     console.log("a = ",a, " b = ",b);
     console.log("a % b = ", a % b);

   2) Exponentiation operator
     let a = 5;
     let b = 2;
     console.log("a =",a, "b = ", b);
     a^b;
     console.log("a**b =",a ** b);

3) Unery Operators
     Increment
      let a = 5;
      let b = 2;
      console.log("a =",a,"b =",b);
     a++;
     console.log("a++ =",a++);
Decrement
      let a = 5;
      let b = 2;
      console.log("a =",a,"b =",b);
      a--;
    console.log("a-- =",a--);
  */
   
// 2} Assignment Opreators
  /* 
  let a = 5;
   let b = 2;
   a += 4;
   b -= 1;
   a *= 2;
   a %= 2;
   console.log("a += ",a );
   console.log("a -= ",b );
   console.log("a *= ",a );
   console.log("a %= ",a );
  */

// 3} Comparisum Operator's
    /*
       let a = 5;
       let b = 5;
       console.log(a == b);
       console.log(a != b);
       console.log(a === b);
       console.log(a !== b); 
       console.log(a > b);
       console.log(a < b);
       console.log(a >= b);
       console.log(a <= b);
       */

   // 4} logical Operator's
        /*
        let a = 4;
        let b = 4;
       console.log(a<=b && a===b);
       console.log(a>=b || a===b);
       console.log(!a>=b);
      */



// ------------Conditional Statement------------------//

  // 1} if statement

  /* 
   let mode = "dark";
   let color;

   if (mode === "dark") {
    color = "black"
   }

   if (mode === "light"){
    color = "white"
   }
   console.log(color);
  */

   /*
   let age = 17;
   let msg ;
   if (age > 18) {
    msg = "you are ready for voting"
   }
   if (age<18) {
    msg = "you not selected for voting"
   }
   console.log(msg);
   */

  // 2} if - else statement

    /*
    let mode = "white";

    if (mode === "dark") {
      console.log("Display is black");
    } else{
      console.log("none display");
    }
     */

  // 3} else if statement
  /*
    let marks = "9"
    let grade ;

    if (marks >= 90) {
      grade = "A+"
    }
    
    else if (marks >= 80) {
      grade = "A"
    }

    else if (marks >= 70) {
      grade = "B"
    }
    
    else if (marks >= 50) {
      grade = "C"
    }
    
    else if (marks >= 35) {
      grade = "D"
    } else{
      console.log("you are very NALAYEK")
    }
    
    console.log("marks = ", marks);
    console.log("grade = ",grade);

    */

    // ternary Operator
  
/*
    let age = 18;

    let result = age > 18 ? "valid" : "not valid";
    console.log(result);
*/


//--------Let's Pratice------------//

// 1) Get user to input a number using prompt ("Enter the number:")
// check if the number is multiple of 5 or not ?
/*
 let num = prompt("enter the number");
  if (num % 7 === 0) {
  console.log(num,"this number is multiple of ");
  } else{
  console.log(num, "this number is not multiple of");
  }
*/  

// 2) write a program which can give to students according to their scores ?
/*

  let score = "9";
  let grade ;

  if (score >= 80) {
  grade = "A" 
  } else if (score >=70){
  grade = "B"
  } else if (score >= 60){
  grade = "C"
  }
  else if(score>=50){
  grade ="D"
  } else{
  grade = "F"
  }

console.log("your grade is = ",grade);
*/