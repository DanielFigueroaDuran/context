import { React, useContext } from 'react'
import { UserContext } from '../context/Context'

const Text = () => {
    const { number, setNumber } = useContext(UserContext);
    //console.log(number);
    return (
        <p>{number}</p>
    )
}

export default Text