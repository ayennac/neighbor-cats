
//npm installed react-router-dom so that we can style individual pages
import { BrowserRouter, Routes, Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages 
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Posts from './pages/Posts'

//layouts
import RootLayout from './layouts/RootLayout'




const App = () => {
  const {user} = useAuthContext()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<RootLayout/>}>
      <Route index element={user ? < Home/> : <Navigate to="/login"/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "login"  element ={!user ? <Login/>: <Navigate to="/"/>}/>
      <Route path = "signup" element ={!user ? <Signup/>: <Navigate to="/"/>}/>
      <Route path = "posts" element = {<Posts/>}/>
      <Route path = "*" element ={<p>Oops! There's nothing here!</p>}/>
      </Route>
    )
  )


   return (
      <RouterProvider router = {router}>

      </RouterProvider>
  );
}

export default App;
