//@ts-check

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Cat() {
    const [image, setImage] = useState()
    const [animal, setAnimal] = useState('cat')
    useEffect(() => {
        const makeRequest = async () => setImage(
            animal === 'cat'
                ? (await axios(`https://aws.random.cat/meow`)).data.file
                : (await axios(`https://random.dog/woof.json`)).data.url
        )
        makeRequest()

    }, [animal])

    return (
        <div>
            <img src={image} />
            <button onClick={() => setAnimal(animal === 'dog' ? 'cat' : 'dog')} >{animal}</button>
        </div>
    )

}

/**
 * 
 * @param {'cat' | 'dog'} animal
 * @returns {'cat' | 'dog'} 
 */
export const chooseAnimal = (animal) => animal === 'dog' ? 'cat' : 'dog'

export default Cat 