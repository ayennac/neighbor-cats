
//npm installed react-router-dom so that we can style individual pages
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages 
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Posts from './pages/Posts'

//layouts
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path = "about" element = {<About/>}/>
    <Route path = "login" element = {<Login/>}/>
    <Route path = "signup" element = {<Signup/>}/>
    <Route path = "posts" element = {<Posts/>}/>
    <Route path = "*" element ={<p>Oops! There's nothing here!</p>}/>

    </Route>
  )
)

const App = () => {
   return (
      <RouterProvider router = {router} >

      </RouterProvider>
  );
}

export default App;
