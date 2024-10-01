// question 1
let age = prompt("enter your age")
if(age<=20 && age>=10) {
    console.log("your age lies between 10 and 20")
}
else{
    console.log("your age doesnt lie between 10 and 20")
}
/// question 2
let num = prompt("enter a number")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
    console.log("it can be dividable")
}
else{
    console.log("it cant be divide")
}