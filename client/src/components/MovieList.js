import React, { useEffect, useState } from 'react'

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    //const id = 1;
    useEffect(() => {
        setMovies([
            { id: 1, tittle: 'Spongebob Squarepants', runtime: 145 },
            { id: 1, tittle: 'Ogry', runtime: 145 },
            { id: 1, tittle: 'Chalk Zone', runtime: 145 },
        ]);
    }, []);


    return (
        <div className="row">
            {movies.map((movie) =>  (
            <div className="col-sm-4 mb-2" key={index}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
                ))}
        </div>
    );
};

export default MovieList;
