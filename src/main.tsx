import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FontStyles from './fontStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
)
