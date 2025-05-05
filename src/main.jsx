import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import NavBar from './Components/NavBar.jsx'
import MainForm from './Components/MainForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
    <MainForm/>
    
    </BrowserRouter>
    
    
  </StrictMode>,
)
