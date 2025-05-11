import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ScroolToTop from "./components/ScroolToTop.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScroolToTop/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
