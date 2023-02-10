
import { usePostsContext } from "../hooks/usePostContext"
import { useAuthContext } from "../hooks/useAuthContext"


const Post = ({post}) => {

    const {user} = useAuthContext()
    const {dispatch} = usePostsContext()
    
    if(!user){
        return
    }

    const handleClick = async() =>{
        const response = await fetch('/api/posts/' + post._id, {
            method: 'DELETE',
            headers:{'Authorization': `Bearer ${user.token}`}
        })
        
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_POST', payload: json})
        }
    }
    
    return(
        <div className= "post">
            <h3>{post.fname} {post.lname}</h3>
            <p>{post.des}</p>
            <p>{post.createdAt}</p>
            <span onClick = {handleClick} >Delete</span>
        </div>
    )
}

export default Post