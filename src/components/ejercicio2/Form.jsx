import { React, useContext } from 'react'
import { UserContext } from '../context/Context'

const Form = () => {

    const { userData, setUserData } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(userData);
    };

    function handleChange(event) {

        const { target } = event;
        const { name, value } = target;


        const newUserData = {
            ...userData,
            [name]: value,
        };

        // Sincroniza el estado de nuevo
        //setUserData(prev => ({ ...prev, name: value, }));
        setUserData(newUserData);
    }


    return (
        <div className='flex justify-center '>
            <form className='flex flex-col bg-slate-300 shadow-xl rounded px-8 pt-6 pb-8'
                onSubmit={handleSubmit}>

                <label className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor="pet">
                    Tu mascota favorita.
                </label>

                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    name='pet'
                    id='pet'
                    value={userData.pet}
                    onChange={handleChange}
                />

                <label className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor="meal">
                    Tu comida favorita.
                </label>

                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    name='meal'
                    id='meal'
                    value={userData.meal}
                    onChange={handleChange}
                />

                <label className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor="age">
                    Si eres mayor de edad o no.
                </label>

                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    name='age'
                    id='age'
                    value={userData.age}
                    onChange={handleChange}
                />

                <label className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor="drunk">
                    Si eres un borracho o no.
                </label>

                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    name='isDrunk'
                    value={userData.isDrunk}
                    onChange={handleChange}
                />

                <input className=' border-spacing-1 rounded' type="submit" />
            </form>
        </div>
    )
}

export default Form