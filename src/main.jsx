import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App'
// import FallbackComponent from './components/FallbackComponent'
import './index.css'

function handleReset(){

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender= {({error, resetErrorBoundary}) => (
      <div>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Regenerate response</button>
      </div>
    )}
      onReset={handleReset}

    > 
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
