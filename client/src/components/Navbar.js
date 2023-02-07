import {NavLink} from 'react-router-dom'
//this link component handles the routing locally in the browser instead of requesting from the server

const Navbar = () =>{
    return(
        <header>
        <div className = "container">
        <h1>Neighbor Cats</h1>
            <nav>
            <NavLink to="/"> Home</NavLink>
            <NavLink to ="about"> About</NavLink>
            <NavLink to ="login"> Login</NavLink>
            <NavLink to ="signup"> Signup</NavLink>
            <NavLink to ="posts"> Posts</NavLink>
            </nav>
        </div>
        </header>
    )
}

export default Navbar