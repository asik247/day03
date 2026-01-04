let number = 100;
let string = 'ask';
let result = `my name is ${string} and my number is ${number}`
console.log(result);
// The if statement syntax:-
if(10<5){
console.log('right');
}else{
    console.log('rong');
}
// The else if Statement
if(1>=5 & 2<=5){
    console.log('worked');
}else if('asik'=='asik'){
    console.log('asik2');
}else{
    console.log('asik3');
}
// Example 3: Even / Odd
let numbers = 4;
if(numbers % 2 == 0){
    console.log('the numbers is even');
}else{
    console.log('the numbers is odd');
}
// Example 2: Grade system
let marks = 39;
if (marks>=80){
    console.log("A+");
}else if(marks>=70){
    console.log("A");
}
else if(marks>=60){
    console.log("A-");
}
else if(marks>=50){
    console.log("B");
}
else if(marks>=40){
    console.log("C");
}else if(marks>=33){
    console.log("D");
}else{
    console.log('Fail');
}
// Real-Life Example: Login System
let userName = 'asi';
let password = 'rimon583'
if (userName === "asik" & password === "rimon5893"){
    console.log('Login successfull');
}else if(userName !== "asik"){
    console.log('user name worng');
}else{
    console.log('password worng');
}