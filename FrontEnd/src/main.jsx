import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthPrviderContext from './Context/AuthPrviderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <AuthPrviderContext>
         <div className=" dark:bg-slate-900 dark:text-white">
         <App />
         </div>
    </AuthPrviderContext>
  </BrowserRouter>
)
