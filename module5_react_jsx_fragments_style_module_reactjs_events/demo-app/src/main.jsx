import react, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import './assets/css/style.css';
import InlineCss from './components/InlineCss'
import InternelCss from './components/InternelCss'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 style={{textAlign:'center',margin:'40px auto'}}>This is Demo of How many Way We Can Apply Css Styles</h1>
    <InlineCss></InlineCss>
    <InternelCss></InternelCss>
    <Layout></Layout>
  </StrictMode>,
)
