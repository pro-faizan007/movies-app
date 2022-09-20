import React, { useContext } from 'react'
import movieContext from '../../context/Movie/movieContext';
const Pagination = () => {
    const context = useContext(movieContext);
    const { pages, selectedPage, selectedPageNumber } = context;
    return (
        <ul className="pagination">
            {pages.map((value) => {
                return (
                    <li
                        className={
                            selectedPage === value ? "page-item active" : "page-item"
                        }
                    >
                        <button
                            style={{ cursor: "pointer" }}
                            className="page-link"
                            onClick={() => selectedPageNumber(value)}
                        >
                            {value}
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}

export default Pagination