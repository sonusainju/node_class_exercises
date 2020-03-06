function biggerNumber(firstNumber, secondNumber) {
  if (typeof firstNumber == "number" && typeof secondNumber == "number") {
    if (firstNumber > secondNumber)
      console.log(firstNumber + " is bigger than " + secondNumber);
    else if (firstNumber == secondNumber) console.log("Both numbers are equal");
    else console.log(secondNumber + " is bigger than " + firstNumber);
  } else console.log("Both parameters need to be numbers");
}

// check
biggerNumber(4, 4);
console.log(typeof 3);
