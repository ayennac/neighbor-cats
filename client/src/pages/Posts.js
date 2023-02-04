import {useEffect, useState} from 'react'


import Post from '../components/Post'
import PostForm from '../components/PostForm'

const Posts = () => {

    const[posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts')
            const json = await response.json()
            if (response.ok){
                setPosts(json)

            }
        }
        fetchPosts()
    }, [])



    return(
        <div className = "posts">
            <h2>Posts</h2>
            <PostForm></PostForm>
            {posts && posts.map((post) =>(
                <Post key ={post._id} post={post}/>
            ))}
        </div>
    )
}

export default Posts