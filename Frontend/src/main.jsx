import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Auth_context from './Context/auth_context.jsx'
import Current_user from './Context/Current_user.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Auth_context>
        <Current_user>
          <App />
        </Current_user>
      </Auth_context>
    </BrowserRouter>
  </StrictMode>
)