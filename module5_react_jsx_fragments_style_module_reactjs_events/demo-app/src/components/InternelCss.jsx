import React from 'react'
const name = 'Rudra';
const age = 23;
const edu = 'B.Tech';
const dept = 'IT';
const pin = 360002;
const address = 'Juna hudco rajkot';

export default function InternelCss() {
  return (
    <>
    <div className="App">
      <h1>Internel CSS Demo</h1>
      <h2>
           Hi {name} <br /> you are now : {age} years old <br /> congrates done :{' '}
          {edu} <br /> yes i thing you are in : {dept} <br /> you are still live
          in : {pin} <br /> i forget your address but remmber you live in this :{' '}
          {address}{' '}

      </h2>
      </div>
    </>
  )
}
