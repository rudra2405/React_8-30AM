import react from 'react';

let a = 10;
let b = 20;


let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;

function CalcApp(){
   return(
    <>
      <div className="calc-app">
         <h1 className='fade-in'>Calculate everything</h1>
         <hr/>
         <p>
          Additions of Numbers is : {c} <br/>
          substration of numbers is : {d} <br/>
          multiplication of numbers is : {e} <br/>
          division of numbers is : {f}
         </p>
      </div>
    </>
   )
}

export default CalcApp

