import './App.css'
import Login from './components/NoAuth/Login/Login'
import { Home } from './components/Auth/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NoAuth } from './components/NoAuth/NoAuth'
import {SignUp} from './components/NoAuth/SignUp/SignUp'
import {Auth} from './components/Auth/Auth'
import {Places} from './components/Auth/Places/Places'

function App() {
   const router = createBrowserRouter([
    {
      path: '/',
      element : <NoAuth/>,
      children:[
        {path:'login',element:<Login/>},
        {path:'signup',element:<SignUp/>}
      ]
    },
    {
      path: '/auth',
      element : <Auth/>,
      children:[
        {path:'home',element:<Home/>},
        {path:'places',element:<Places/>}
      ]
    }
   ])

  return (
   <RouterProvider router={router}/>
  )
}

export default App
