//* Chapter_35_38

// !q1
// function display_date(){
//     var date = new Date()
//     document.write(date)
// }

// display_date()

//! q2
// function display_name(){
//     var f_name = "sajjad"
//     var l_name = "hussain"
//     document.write("my name is " + f_name + " " + l_name)
// }

// display_name()

//! q3
// function  add_number(num1 , num2)
// {
//     var result = num1 + num2;
//     document.write("adding two number "  + num1 + " and  " + num2  + " result  " +result )
// }

// add_number(5 , 5)

//! q4
// function calculator(num1 , num2  , operator)
// {
//     var result;
//     if (operator == "+")
//     {
//         result = num1 + num2
//     }
//     else if (operator == "-")
//     {
//         result = num1 + num2
//     }
//     else if (operator == "*")
//     {
//         result = num1 * num2
//     }else if (operator == "/")
//     {
//         result = num1 / num2
//     }
//     else
//     {
//         result = "input wrong operator"
//     }
//     return result;
// }

// var num1 = parseInt(prompt("input first number "))
// var num2 = parseInt(prompt("input second number "))
// var operator = prompt("input operator ")
// var output = calculator(num1 , num2 ,operator)
// document.write( "result : " + output)


//! q5
// function square(num)
// {
//     return num * num
// }

// var result = square(5)
// document.write(result)

//! q6
// function factorial(num1) {
//     var result = 1;
//     for (let i = 1; i <= num1; i++) {
//         result *= i;
//     }
//     return result;
// }

// var res = factorial(3);
// document.write(res);

//!q7
// function printnumber(start , end){
//     for(let i = start ; i <= end ; i++)
//     {
//         document.write(i +"<br>")
//     }
// }

// printnumber(1 , 10)

//! q8
// function calculate_hypo(base , perp)
// {
//     var base1 = calculate_square(base)
//     var perp1 = calculate_square(perp)

//     var hypoten = base1 + perp1
//     document.write(hypoten)
// }
// function  calculate_square(res)
// {
//     return res *= res
// }

// calculate_hypo(3 , 3)

//! q9
// function calculate_area(width , height)
// {
//     return width * height
// }
// var width = 2;
// var height = 5;
// var res = calculate_area(width , height)
// document.write("Area is of width and height " +res)
// var res = calculate_area(2 , 4)
// document.write("Area is of width and height "+res)

//! q10
// function palindrom(str) {
//     var res = str.toLowerCase();
//     var result = res.split("").reverse().join("")
//     if (res === result) {
//         document.write(res , " is a palindrom")
//     }
//     else
//     {
//         document.write(res , " is not a  palindrom")    
//     }
// }

// palindrom("madam")

//! q11
// function first_letter_uper(str) {
//     var res = str.split(" ");
//     var res_len = res.length;
//     for (let i = 0; i < res_len; i++) {
//         res[i] = res[i][0].toUpperCase() + res[i].slice(1);        
//     }

//     document.write(res.join(" "))
// }
// first_letter_uper("sajjad hussain")



//! q12
// function longest_word(str) {
//     var res = str.split(" ");
//     var res_len = res.length;
//     var temp = "";
//     for (let i = 0; i < res_len; i++) {
//         if (res[i].length > temp.length)
//         {
//             temp = res[i];
//     }
//     }
//     document.write(temp)

// }
// longest_word("sajjad hussain")


//! q13
// function letter_count(str, let) {
//     var count = 0
//     for (let i = 0; i < str.length ; i++) {
//         if (let === str[i])
//         {
//             count ++
//         }
//     }
//     document.write(let + " is " + count)
// }
// letter_count("sajjad hussain" , "j")

//! q14
// function calcCircumference(radius) 
// {
//     var res = 2 * (22/7) * radius
//     return res
// }
// function calcArea(radius)
// {
//     var res = (22/7) * radius * radius;
//     return res
// }
// var radius = 6;
// var result_calcir = calcCircumference(radius)
// var result_calcarea = calcArea(radius)
// document.write("The circumference is "+ result_calcarea + "<br>")
// document.write("The area is "+ result_calcir)