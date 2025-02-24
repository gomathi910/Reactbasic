
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ThemeProvider } from './CreateContect.jsx'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient, QueryClientProvider } from 'react-query';




const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
 
   <BrowserRouter> 
   <QueryClientProvider client={queryClient}>
      <App/> 
    </QueryClientProvider>
  </BrowserRouter>


);


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  // <ThemeProvider>
  //   <App/>
  // </ThemeProvider>
)
