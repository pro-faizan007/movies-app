import React, { useContext } from "react"
import movieContext from '../../context/Movie/movieContext';
import MovieBox from "../AddMovie/AddMovie";
import Modale from "../Modal/Modal";
import MoviesGenre from "../MoviesGenre/MoviesGenre";
import Pagination from "../Pagination/Pagination";
import TextBox from "../Textbox/TextBox";
const MoviesTable = (props) => {
    const context = useContext(movieContext);
    const { paginatedMovies, sortMovies, showModalOnClick, searchData, movieFilterOnSearch, movieEditBox, update, openModel } = context;



    return (
        <>

            <div className="container">
                <div className="row">

                    <div className="col-3">
                        <button class="btn btn-primary mt-4" onClick={openModel}>Add New Movie</button>
                        <MoviesGenre />
                        <Modale />
                    </div>
                    <div className="col">
                        <p className="mt-4">Showing {movieFilterOnSearch.length} Movies in Database</p>
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col" onClick={() => sortMovies('title')}>Title</th>
                                    <th scope="col" onClick={() => sortMovies('genre')}>Genre</th>
                                    <th scope="col" onClick={() => sortMovies('stock')}>Stock</th>
                                    <th scope="col" onClick={() => sortMovies('rate')}>Rate</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData.length > 1 ? movieFilterOnSearch.map((val) => {
                                    return <tr>
                                        <td>{val.Title}</td>
                                        <td>{val.Genre}</td>
                                        <td>{val.Released}</td>
                                        <td>{val.Country}</td>
                                        <td><button type="button" class="btn btn-danger" onClick={() => showModalOnClick(val.imdbID)} >Delete</button></td>
                                        <td> <button type="button" class="btn btn-danger" onClick={() => movieEditBox(val)}>Edit</button></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                }) : paginatedMovies.map((val) => {
                                    return <tr>
                                        <td>{val.Title}</td>
                                        <td>{val.Genre}</td>
                                        <td>{val.Released}</td>
                                        <td>{val.Country}</td>
                                        <td><button type="button" class="btn btn-danger" onClick={() => showModalOnClick(val.imdbID)}>Delete</button></td>
                                        <td><button type="button" class="btn btn-danger" onClick={() => movieEditBox(val)}>Edit</button></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <Pagination />
                        <TextBox />
                        <MovieBox />
                    </div>
                </div>
            </div >
        </>
    )
}

export default MoviesTable