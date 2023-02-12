
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
            <p className = "post-prof-pic">{post.userPic}</p>
            <h3 className = "post-name">{post.fname} {post.lname}</h3>
            <p className = "post-desc">{post.des}</p>
            <p className = "post-link">{post.pic}</p>
            <p className = "post-date">{post.createdAt}</p>
            <span onClick = {handleClick} >Delete</span>
        </div>
    )
}

export default Post