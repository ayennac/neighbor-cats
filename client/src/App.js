
//npm installed react-router-dom so that we can style individual pages
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

//pages 
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Posts from './pages/Posts'

//layouts
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path = "about" element = {<About/>}/>
    <Route path = "login" element = {<Login/>}/>
    <Route path = "posts" element = {<Posts/>}/>

    </Route>
  )
)

function App() {
  return (
      <RouterProvider router = {router}>

      </RouterProvider>
  );
}

export default App;
