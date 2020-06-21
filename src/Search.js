import React, { useState, useEffect } from 'react'
import './Search.css'
import axios from 'axios'
function Search() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    useEffect(() => {
        const makeRequest = async () =>
            setData(
                (await axios(`https://hn.algolia.com/api/v1/search?query=${query}`)).data.hits
            )
        makeRequest()
    }, [query])

    return (
        <div>
            <input
                type='text'
                className='block'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />

            <div>
                {
                    data.map(
                        article => (
                            <p key={article.title} className='Search-text'>
                                <a href={article.url}>{article.title}</a>
                            </p>
                        )
                    )
                }
            </div>

        </div>
    )
}

export default Search