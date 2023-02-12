import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()


export const authReducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return{
                user:action.payload
            }
        case 'LOGOUT':
            return{
                user:null
            }
        
        default:
            return state
    }
}


export const AuthContextProvider = ({children}) => {
    //gett the user that's already in local storage first rather than null 
    // to avoid having null right away
    const [state, dispatch] = useReducer(authReducer, {
        user: JSON.parse(localStorage.getItem('user'))
    })

    useEffect(() =>{
        const user = JSON.parse(localStorage.getItem('user'))

        if (user){
            dispatch({type:'LOGIN', payload: user})
        }        
    }, [])

    console.log('AuthContext state:', state)

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}