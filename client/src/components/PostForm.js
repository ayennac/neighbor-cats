
import {useState} from 'react'


//context
import { usePostsContext } from '../hooks/usePostContext'
import { useAuthContext } from '../hooks/useAuthContext'


const PostForm = () =>{
    const {dispatch} = usePostsContext()
    const {user} = useAuthContext()
    const lname = user.user_lname
    const fname = user.user_fname

    const [des, setDes]  = useState('')
    const [pic, setPostPic] = useState('')
    const [userpic, setUserpic] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(!user){
            setError('You must be logged in')
            return
        }
        console.log(lname, fname)

        const post = {fname, lname, des, pic, userpic}

        const response = await fetch('/api/posts/', {
            method:'POST',
            body:JSON.stringify(post),
            headers:{
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
    
            setDes('')
            setPostPic('')
            setUserpic('')
            setError(null)
            dispatch({type: 'CREATE_POST', payload: json})
        }
        
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
        <h3>PostForm</h3>
             <label> Description </label>
             <input 
                type="text"
                onChange={(e) => setDes(e.target.value)}
                value={des}/>
             <label> PostPic </label>
             <input 
                type="text"
                onChange={(e) => setPostPic(e.target.value)}
                value={pic}/>
            <label> UserPic </label>
             <input 
                type="text"
                onChange={(e) => setUserpic(e.target.value)}
                value={userpic}/>
            <button> Post</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PostForm