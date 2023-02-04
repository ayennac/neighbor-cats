
import {useState} from 'react'


const PostForm = () =>{

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [des, setDes]  = useState('')
    const [pic, setPostPic] = useState('')
    const [userpic, setUserpic] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const post = {fname,lname, des, pic, userpic}
        const response = await fetch('/api/posts/', {
            method:'POST',
            body:JSON.stringify(post),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setFname('')
            setLname('')
            setError(null)
        }
        
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
        <h3>PostForm</h3>
            <label> First Name </label>
            <input 
                type="text"
                onChange={(e) => setFname(e.target.value)}
                value={fname}/>
            <label> Last Name </label>
            <input 
                type="text"
                onChange={(e) => setLname(e.target.value)}
                value={lname}/>
            <button> Post</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PostForm