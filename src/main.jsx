import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NavBar from './Components/NavBar.jsx'
import MainForm from './Components/MainForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <MainForm/>
    
  </StrictMode>,
)
