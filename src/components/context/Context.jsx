import { React, createContext, useState } from 'react'

export const UserContext = createContext(null);

const Context = ({ children }) => {


    return (
        <UserContext.Provider >
            {children}
        </UserContext.Provider>
    )
}

export default Context