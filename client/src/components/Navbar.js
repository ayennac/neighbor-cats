import {NavLink} from 'react-router-dom'
//this link component handles the routing locally in the browser instead of requesting from the server

import { useLogout } from '../hooks/useLogout'

const Navbar = () =>{
    const {logout} = useLogout()
    const handleClick = () =>{
        logout()
    }

    return(
        <header>
        <div className = "container">
        <h1>Neighbor Cats</h1>
            <nav>
            <NavLink to="/"> Home</NavLink>
            <NavLink to ="about"> About</NavLink>
            <div><button onClick = {handleClick}> Logout</button></div>
            <NavLink to ="login"> Login</NavLink>
            <NavLink to ="signup"> Signup</NavLink>
            <NavLink to ="posts"> Posts</NavLink>
            </nav>
        </div>
        </header>
    )
}

export default Navbar