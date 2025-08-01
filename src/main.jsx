import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage'
import App from './App'
import HomePage from './Pages/HomePage'
import Collection from './Pages/Collection'
import PdpPage from './Pages/PdpPage'
import PlpPage from './Pages/PlpPage'


const myRouter = createBrowserRouter([{
   path:"/",
  element:<App />,
  errorElement:<ErrorPage />,
  children:[
    {
      path:"/",
      element:<HomePage />
    },
    {
      path:"/collection",
      element:<Collection />
    },
    {
      path:"/pdp",
      element:<PdpPage />
    },
    {
      path:'/plp',
      element:<PlpPage />
    }
  ]
  

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={myRouter} />
  </StrictMode>,
)
