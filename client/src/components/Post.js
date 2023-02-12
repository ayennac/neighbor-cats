
import { usePostsContext } from "../hooks/usePostContext"
import { useAuthContext } from "../hooks/useAuthContext"
import logo192 from './logo192.png'
import ayenna_pic from './Ayenna_Cagaanan_biopic.JPG'


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
            <div className = "post-header">
                <img className = "post-prof-pic" src = {ayenna_pic}/>
                <h3>{post.fname} {post.lname}</h3>
            </div>
            <p className = "post-description">{post.des}</p>
            <img className = "post-link" src= {logo192}/>
            <p className = "post-date">{post.createdAt}</p>
            <span onClick = {handleClick} >Delete</span>
        </div>
    )
}

export default Post