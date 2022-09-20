import React from 'react'
import movieContext from '../../context/Movie/movieContext';
const MoviesGenre = (props) => {
    const context = React.useContext(movieContext);
    const { selectGenre, handleSelectedGenre } = context;

    return (
        <ul class=" list-group mt-4 ">

            <li className={selectGenre === "All movies" ? "list-group-item active" : "list-group-item"} style={{ cursor: "pointer" }} onClick={() => handleSelectedGenre('All movies')}>All movies</li>
            <li className={selectGenre === "Action" ? "list-group-item active" : "list-group-item"} style={{ cursor: "pointer" }}
                onClick={() => handleSelectedGenre('Action')}>Action
            </li>
            <li class={selectGenre === "Comedy" ? "list-group-item active" : "list-group-item"} style={{ cursor: "pointer" }} onClick={() => handleSelectedGenre('Comedy')} >Comedy</li>
            <li class={selectGenre === "Thriller" ? "list-group-item active" : "list-group-item"} style={{ cursor: "pointer" }} onClick={() => handleSelectedGenre('Thriller')} >Thriller</li>

        </ul>


    )
}

export default MoviesGenre