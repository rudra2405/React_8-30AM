console.log("Hello i am Brijesh");
console.log(45 + 45);

function myFunction() {
  x = 3.14; // This will throw an error because x is not declared
  console.log(x);
}
myFunction(); // Calling the function will result in an error due to the undeclared variable x

/*
compiler simple definition 
A compiler is a program that translates code written in a high-level programming language into machine code, bytecode, or another programming language. It processes the entire source code before execution, checking for errors and optimizing the code for performance. This allows the program to run efficiently on the target machine or platform.

major difference between compiler and interpreter
The major difference between a compiler and an interpreter is that a compiler translates the entire source code into    
machine code before execution, creating an executable file, while an interpreter translates and executes the code line by line at runtime without producing a separate executable file. This means that compilers typically result in faster execution times after the initial compilation, while interpreters allow for more flexibility and easier debugging during development.


what is meaning of executes code line by line at run time? is compiler not execute code in run time?
An interpreter executes code line by line at runtime, meaning it reads and executes each line of code sequentially as the program runs. This allows for immediate feedback and easier debugging, as errors can be identified and fixed on the fly. In contrast, a compiler processes the entire source code before execution, generating an executable file that can be run independently of the source code.A compiler does not execute code at runtime; it translates the entire program into machine code before execution,


what is use strict defninition in one line in js simple ?
"use strict" is a directive in JavaScript that enables strict mode, which enforces stricter parsing and error handling of the code, helping to catch common coding mistakes and unsafe actions.

use of use strict mode?


"use strict" mode in JavaScript is used to enforce stricter parsing and error handling in your code. It helps catch common coding mistakes, prevents the use of undeclared variables, and disallows certain actions that are considered unsafe or error-prone. This can lead to more robust and maintainable code.


any example of use strict in js?
"use strict";
*/
