import React from 'react'
import { AuthProvider, useAuth } from '../common/auth'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout'
import Profile from './pages/Profile'
import Browse from './Pages/Browse'
import Login from './component/Login'
import Register from './component/Register'




// function ProtectedRoute({children}){
//   const {user}=useAuth();
 
//     if(!user){
//     return <Navigate to="/login"/>
//     }
//     else{
//       return children;
//     }

 
// }



const routes=createBrowserRouter(createRoutesFromElements(
  <>
  <Route  path='/' element={<Outlet/>}>
  <Route index element={<Profile/>}/>
  <Route path='manageProfile' element={<Profile edit/>}/>

  <Route path='latest' element={<Layout/>}>
    <Route index element={<h1>Hello latest</h1>} />
  </Route>
  <Route path='browse' element={<Layout/>}>
    <Route index element={<Browse/>} />
  </Route>
  </Route>


  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  </>
))

  

  
  

  

function App() {
  return (
  
     <RouterProvider router={routes}/>

    

     

    
  )
}

export default App


