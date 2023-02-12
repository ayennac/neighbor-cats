import {useEffect} from 'react'

//contexts
import { usePostsContext } from '../hooks/usePostContext'
import { useAuthContext } from '../hooks/useAuthContext'


//components
import Post from '../components/Post'
import PostForm from '../components/PostForm'

const Posts = () => {

    const {posts, dispatch} = usePostsContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts',{
                headers: {'Authorization': `Bearer ${user.token}`}
            })

            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_POSTS', payload: json})
            }
            
        }
        

        if(user){
            fetchPosts()
        }
    }, [dispatch, user])

    return(
        <div className = "posts-container">
            <h2>Posts</h2>
            <PostForm></PostForm>
            {posts && posts.map((post) =>(
                <Post key ={post._id} post={post}/>
            ))}
        </div>
    )
}

export default Posts