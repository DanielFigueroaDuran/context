import { React, useContext } from 'react'
import { UserContext } from '../context/Context'


const Input = () => {
    const { number, setNumber } = useContext(UserContext);

    const handleClick = (event) => {
        if (event.keyCode == 13) setNumber(event.target.value)

    }

    //console.log(number);

    return (
        <div>
            <input type="number" onKeyDown={handleClick} />
            <button onClick={handleClick}>Enviar</button>
        </div>
    )
}

export default Input