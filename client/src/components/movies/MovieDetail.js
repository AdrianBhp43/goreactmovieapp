import React from 'react'

const MovieDetail = () => {
    return (
        <>
            <h2>Movie: </h2>

            <div className="float-start">
                <small>Rating:</small>
            </div>
            <div className="float-end">
                <span className="badge bg-secondary me-1">Action</span>
            </div>
            <div className="clearfix"></div>
            <hr />
            < table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Title:</td>
                    </tr>
                    <tr>
                        <td>Desctiption:</td>
                    </tr>
                    <tr>
                        <td>Runtime:</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default MovieDetail
