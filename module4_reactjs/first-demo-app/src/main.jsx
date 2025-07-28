import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EmployeeDetails from './components/Employee';
import CalcApp from './components/CalcApp';
import ContactUs from './ContactUs';
import './style.css';
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <div className='react-app'>
      <h1>My First React Application</h1>
      <EmployeeDetails/>
      <ContactUs></ContactUs>
      <CalcApp></CalcApp>
    </div>
    </>
  </StrictMode>
)
