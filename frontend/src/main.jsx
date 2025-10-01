import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Index from './index.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'boxicons/css/boxicons.min.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    </StrictMode>,
)
