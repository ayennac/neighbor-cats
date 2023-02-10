import { PostContext } from "../context/PostContext";

import { useContext} from 'react'

export const usePostsContext = () =>{
    const context = useContext(PostContext)

    if (!context){
        throw Error('usePostsContext msut be inside Post Context Provider')
    }

    return context
}