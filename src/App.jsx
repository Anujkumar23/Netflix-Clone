import React from 'react'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout'
import Browse from './Pages/Browse'


const routes=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<h1>Hello world</h1>}/>
   <Route path='/login' element={<h1>Login</h1>}/>
  

  <Route path='/browse' element={<Layout/>}>
    <Route index element={<Browse/>} />
  </Route>
  <Route path='/latest' element={<Layout/>}>
    <Route index element={<h1>Hello latest</h1>} />
  </Route>
  </>
))

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App


