import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { checkVersion } from './version-check'

//this runs a browser reload if we have an older version; make sure it never breaks things
try { checkVersion() } catch { /* ignore */ }

// Create root and render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
)
