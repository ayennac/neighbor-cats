import {NavLink} from 'react-router-dom'
//this link component handles the routing locally in the browser instead of requesting from the server

import { useLogout } from '../hooks/useLogout'

import { useAuthContext }from '../hooks/useAuthContext'

const Navbar = () =>{
    const {logout} = useLogout()
    const {user} = useAuthContext()
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

            {user &&(<div><button onClick = {handleClick}> Logout</button>
            <NavLink to ="posts"> Posts</NavLink></div>
            )}
           
            {!user &&(<div><NavLink to ="login"> Login</NavLink>
            <NavLink to ="signup"> Signup</NavLink></div>)}
           
            </nav>
        </div>
        </header>
    )
}

export default Navbar