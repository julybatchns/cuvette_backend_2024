import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




// ! CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to control how resources on a web server can be requested from another domain outside the domain from which the resource originated. Essentially, it helps to prevent malicious websites from accessing resources on your server without permission.

// ? When working with a frontend application like React.js and a backend server like Express.js, you often encounter situations where your React app (running on one origin, e.g., http://localhost:3000) needs to make HTTP requests to your Express server (running on another origin, e.g., http://localhost:5000). Without proper CORS settings, these requests will be blocked by the browser.

// ? When a browser makes a cross-origin request, it sends an OPTIONS request to the server (a preflight request) to check if the actual request is safe to send. The server must respond with appropriate CORS headers indicating which origins, methods, and headers are allowed.