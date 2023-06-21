import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

let root
const rootElem = document.getElementById('root')
if (rootElem) root = ReactDOM.createRoot(rootElem)

root?.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
