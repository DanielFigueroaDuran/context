import { React, useRef, useState } from 'react'

const Bank = () => {
    const [capital, setCapital] = useState([500]);

    const add = useRef(0);
    const subs = useRef(0);

    const handleClick = (event) => {
        event.preventDefault();
        const newAdd = add.current.value;
        const newSubs = subs.current.value;
        //console.log(newAdd, newsubs);
        if (add) {
            setCapital(prev => Number(capital) + Number(newAdd));
        } else if (subs) {
            setCapital(Number(capital) - Number(newSubs));
        }
    }


    return (
        <div className='flex justify-center p-8  bg-slate-500 shadow-xl rounded gap-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="add"
            >
                +
            </label>
            <input type="number" ref={add} />

            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="subs"
            >
                -
            </label>
            <input type="number" ref={subs} />

            <button onClick={handleClick}>"Make Transaction"</button>

            <p>{capital} €</p>
        </div>
    )
}

export default Bank