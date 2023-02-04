import {NavLink, Outlet} from 'react-router-dom'

export default function RootLayout(){
    return(
        <div className ="root-layout">
           <header>
            <nav>
         <h1>Neighbor Cats</h1>
         <NavLink to="/"> Home</NavLink>
         <NavLink to ="about"> About</NavLink>
         <NavLink to ="login"> Login</NavLink>
         <NavLink to ="posts"> Posts</NavLink>
       </nav>
    
     </header>  
     <main>
        <Outlet/>
     </main>
        </div>
    )
}