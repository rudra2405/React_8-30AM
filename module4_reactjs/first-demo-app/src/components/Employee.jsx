import react from 'react';

let name = 'Rudra';
let age = 25;
let salary = 20000;
function EmployeeDetails(){
  return (
    <div className='app'>
        <h2>My Details:</h2>
        <h1>Name is : {name} <br/> Age is : {age} <br/> salary is : {salary}</h1>
    </div>
  );
}

export default EmployeeDetails;