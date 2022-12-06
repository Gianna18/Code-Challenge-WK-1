// Code Challenge 1
// Assign Variable Average and insert prompt
//Declare the function
// Use IF statement to find out the grade to input for each mark.


 function studentMarks() {
    if (average > 79) {
    console.log("A"); 
}
    else if (average >= 60 && average <= 79) {
    console.log("B");
}
    else if (average >=59 && average <= 49) {
    console.log("C");
}
    else if (average >= 49 && average <= 40) {
    console.log("D");
} 
    else {
    console.log("E");
}
 }
 let average = prompt('Input marks')
studentMarks()



