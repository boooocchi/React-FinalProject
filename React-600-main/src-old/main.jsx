import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from './redux/store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
