import { React, createContext, useState } from 'react'

export const UserContext = createContext(null);

const Context = ({ children }) => {

    const [number, setNumber] = useState([]);
    const [userData, setUserData] = useState({
        pet: "",
        meal: "",
        age: "",
        isDrunk: ""
    });

    //console.log(number);
    //console.log(userData);

    return (
        <UserContext.Provider value={{ number, setNumber, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export default Context