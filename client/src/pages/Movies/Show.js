import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowMovie = () => {
    let { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

        useEffect(() => {
        const fetchMovies = async () => {
            try {
                const result = await axios(`http://localhost:4000/movies/${id}`)
                await setMovie(result.data.movie);
                setLoaded(true);
            } catch (err) {
                setErrorMessage(err.response.data)
            }
        };
        fetchMovies();
    }, []);

    return (
        <>  
            {!loaded ? (
                (() => {
                    if (errorMessage) {
                        return (
                            <div className="row">
                                <p>Ooops... {errorMessage}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div className="row">
                                <p>Loading...</p>
                            </div>
                        );
                    }
                })()
            ) : (
            //         <>
            //             <pre>{JSON.stringify(movie)}</pre>
            //             <h2>Movie: {movie.title} ({movie.year})</h2>

            //             <div className="float-start">
            //                 <small>Rating: {movie.mpaa_rating} </small>
            //             </div>
            //             <div className="float-end">
            //                 {Object.entries(movie.genres).map((genre, index) => (
            //                     <Link
            //                         className='badge bg-secondary me-1'
            //                         to={`/genres/${genre[0]}`}
            //                         key={index}
            //                     >
            //                         {genre[1]}
            //                     </Link>
            //                 ))}
            //             </div>
            //             <div className="clearfix"></div>
            //             <hr />
            //             <table className= 'table table-white table-striped table-sm-mt-4'>
            //         <thead></thead>
            //         <tbody>
            //             <tr>
            //                 <td>Title:</td>
            //                 <td>{movie.title}</td>
            //             </tr>
            //             <tr>
            //                 <td>Description:</td>
            //                 <td>{movie.description}</td>
            //             </tr>
            //             <tr>
            //                 <td>Runtime:</td>
            //                 <td>{movie.runtime} Minute(s)</td>
            //             </tr>
            //         </tbody>
            //     </table>
            //  </>
            )}
        </>
    )
}

export default ShowMovie;
