import React from 'react'
import { createContext,useState } from 'react'

const User_context = createContext({})

    export const UserProvider = ({children})=>{
        const [UserID, setUserID] = useState("")

    return (<User_context.Provider value={(UserID,setUserID)}>{children}</User_context.Provider>)
}


export default User_context