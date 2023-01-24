
//npm installed react-router-dom so that we can style individual pages
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

//pages 
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About';

//layouts
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<Home/>}>
    <Route path = "about" element = {<About/>}>
    </Route>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router}>

      </RouterProvider>
     
    </div>
  );
}

export default App;
