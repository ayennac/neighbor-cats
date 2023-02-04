const Post = ({post}) => {
    return(
        <div className= "post">
            <h3>{post.fname} {post.lname}</h3>
            <p>{post.des}</p>
            <p>{post.createdAt}</p>
        </div>
    )
}

export default Post