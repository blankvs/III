//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  
    return str.toUpperCase()
    
  }

//   Write function bmi that calculates body mass index (bmi = weight / height2).

//   if bmi <= 18.5 return "Underweight"
  
//   if bmi <= 25.0 return "Normal"
  
//   if bmi <= 30.0 return "Overweight"
  
//   if bmi > 30 return "Obese"

  function bmi(weight, height) { 
  
    let NewBmi = weight / (height * height)
      
    if (NewBmi <= 18.5) {
      return "Underweight"
    }
    if (NewBmi <= 25.0) {
      return "Normal"
    }
    if (NewBmi <= 30.0) {
      return "Overweight"
    }
    if (NewBmi > 30) {
      return "Obese"
    }
    
    return NewBmi
  } 

//   Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

//   Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
  
//   If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//   If he doesn't get 10 hoops, return the string "Keep at it until you get it".
  

  function hoopCount (n) {
   
    if ( n >= 10 ) {
      return "Great, now move on to tricks"
    } else {
      return "Keep at it until you get it"
    }
    
    return n
  }

  