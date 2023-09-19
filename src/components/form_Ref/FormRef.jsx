import { React, useRef, useState } from 'react'

const FormRef = () => {

    const [formUser, setFormUser] = useState({});

    const name = useRef('');
    const lastName = useRef('');
    const age = useRef('');
    const city = useRef('');

    const handleClick = (event) => {
        event.preventDefault();
        const newUser = {
            name: name.current.value,
            lastName: lastName.current.value,
            age: age.current.value,
            city: city.current.value
        }

        setFormUser(prev => ({ ...prev, ...newUser }));

    };
    // console.log(formUser);

    return (
        <div className='flex justify-center '>
            <form className='flex flex-col justify-center items-center  bg-slate-200 shadow-xl rounded px-8 pt-6 pb-8'>
                <label htmlFor="name">Name</label>
                <input type="text" ref={name} />

                <label htmlFor="lastName">lastName</label>
                <input type="text" ref={lastName} />

                <label htmlFor="age">Age</label>
                <input type="text" ref={age} />

                <label htmlFor="city">City</label>
                <input type="text" ref={city} />

                <button onClick={handleClick}>Enviar</button>
            </form>
            <h1>Name {formUser.name} LastName {formUser.lastName} tiene {formUser.age} Años y vive en {formUser.city}  </h1>
        </div>
    )
}

export default FormRef