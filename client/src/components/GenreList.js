/*third party */
import React from 'react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const GenreList = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setGenres([
            { id: 1, genre_name: 'Action' },
            { id: 2, genre_name: 'Comedy' },
            { id: 3, genre_name: 'Crime' },
        ])
    }, [])


    return (  
        <div className="row">
            {genres.map((genre,index) => (
                <div className="card" key={index}>
                    <div className="card-bodt text-center">
                        <Link to={`/genres/${genre.id}`}>{genre.genre_name}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GenreList
