import { useState, useEffect } from "react";
import movieContext from "./movieContext";




const MovieStateContext = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([])
    const [serachDataShow, setSearchDataShow] = useState([])
    const [searchData, setSearchData] = useState('')
    const [selectGenre, setSelectGenre] = useState('All movies')
    const [selectedPage, setSelectedPage] = useState(1);
    const [sortMovieAsc, setSortMovieAsc] = useState('Asc')
    const [showModal, setShowModal] = useState({
        isVisible: false,
        userId: null
    })
    const [isCheckedConfirm, setIsCheckedConfirm] = useState(false)
    const [userName, setUserName] = useState('')
    const [searchBarShow, setSearchBarShow] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userInput, setUserInput] = useState({ name: "", email: "", password: "", epassword: "" })
    const [editMovieBox, setEditMovieBox] = useState({ title: "", genre: "", stock: "", rate: "" })
    const [addMovieBox, setAddMovieBox] = useState({ title: "", genre: "", stock: "", rate: "" })
    const [alert, setAlert] = useState('')
    const [editBox, setEditBox] = useState({
        isVisible: false,
        userId: null
    })
    const [addMovieModal, setAddMovieModal] = useState({
        show: false
    })
    const [update, setUpdate] = useState(false)
    const [editItem, setEditItem] = useState(null)
    const pageSize = 3

    const fetchData = async () => {
        const response = await fetch('all.json')
        const userData = await response.json()
        setData(userData)
    }
    const handleOnChange = (value) => {
        setIsAuthenticated(value)
    }

    const movieDataShow = (data) => {
        setData(data)
    }

    useEffect(() => {
        fetchData()

    }, [])
    const filterMovies = selectGenre === 'All movies' ? data : data.filter((movie) => {
        return movie.Genre === selectGenre ? true : false
    })
    const movieFilterOnSearch = filterMovies.filter((movie) => {
        return movie.Title.toLowerCase().startsWith(searchData.toLowerCase())
    })

    const movieEditBox = (id) => {
        for (let i = 0; i < filterMovies.length; i++) {
            const element = filterMovies[i]
            if (element.imdbID === id.imdbID) {
                editMovieBox.title = filterMovies[i].Title;
                editMovieBox.genre = filterMovies[i].Genre;
                editMovieBox.stock = filterMovies[i].Released;
                editMovieBox.rate = filterMovies[i].Country;
                break
            }

        }

        setEditBox({
            isVisible: true
        })
        setUpdate(false)
        setEditItem(id)
        //setUpdate(false)
    }
    const addNewMovie = () => {
        if (addMovieBox.title === "" && addMovieBox.genre === "" && addMovieBox.stock === "" && addMovieBox.rate === "") {
            setAlert("Some Fields are Empty Please Fill It")
        }
        else {
            const id = Math.random()
            setData(
                [{
                    imdbID: id,
                    Title: addMovieBox.title,
                    Genre: addMovieBox.genre,
                    Released: addMovieBox.stock,
                    Country: addMovieBox.rate,
                }, ...data]
            )
            setAddMovieModal(false)

        }
        setAlert("Successfully add a movie")


    }

    const movieUpdateBox = () => {
        setData(data.map((val) => {
            if (val.imdbID === editItem.imdbID) {
                val.Title = editMovieBox.title
                val.Genre = editMovieBox.genre
                val.Released = editMovieBox.stock
                val.Country = editMovieBox.rate
            }
            return val
        }))

        setEditBox({
            isVisible: false
        })
    }
    const openModel = () => {
        setAddMovieModal({
            show: true
        })
    }

    const newSerachData = (serachValue) => {
        setSearchData(serachValue)
        if (searchData !== '') {
            movieFilterOnSearch()
        } else {
            paginatedMovies()
        }

    }


    const handleSelectedGenre = (genre) => {
        setSelectGenre(genre)
    }
    const deleteItem = (id) => {
        const deleteData = data.filter((val) => {
            return showModal.userId !== val.imdbID

        })
        setData(deleteData)
        setShowModal({
            isVisible: false
        })



    }
    const closeModal = () => {
        setShowModal({
            isVisible: false
        })
    }
    const getPages = () => {
        const pagesItem = Math.ceil(movieFilterOnSearch.length / pageSize)
        const pages = []
        for (let i = 1; i <= pagesItem; i++) {
            pages.push(i)

        }

        return pages
    }

    const pages = getPages();

    const startIndex = selectedPage * pageSize - pageSize;
    const endIndex = selectedPage * pageSize - 1;

    const paginatedMovies = filterMovies.filter((_movie, index) => {
        if (index >= startIndex && index <= endIndex) {
            return true;
        }

        return false;
    });
    const selectedPageNumber = (pageNumber) => {
        setSelectedPage(pageNumber);
    };



    const sortMovies = (number) => {
        sortMovieAsc === 'Asc' ? setSortMovieAsc('Dsc') : setSortMovieAsc('Asc')
        sortNewMovies(sortMovieAsc, number)
    }
    const sortNewMovies = (sortMovieAsc, number) => {
        if (number === 'title') {
            sortMovieAsc === 'Asc' ? filterMovies.sort((preValue, nextValue) =>
                preValue.Title > nextValue.Title ? 1 : -1
            ) : filterMovies.sort((preValue, nextValue) =>
                preValue.Title < nextValue.Title ? 1 : -1
            )
            return
        } else if (number === 'genre') {
            sortMovieAsc === 'Asc' ? filterMovies.sort((preValue, nextValue) =>
                preValue.Genre > nextValue.Genre ? 1 : -1
            ) : filterMovies.sort((preValue, nextValue) =>
                preValue.Genre < nextValue.Genre ? 1 : -1
            )
            return
        } else if (number === 'stock') {
            sortMovieAsc === 'Asc' ? filterMovies.sort((preValue, nextValue) =>
                preValue.Released > nextValue.Released ? 1 : -1
            ) : filterMovies.sort((preValue, nextValue) =>
                preValue.Released < nextValue.Released ? 1 : -1
            )
            return
        }
        else if (number === 'rate') {
            sortMovieAsc === 'Asc' ? filterMovies.sort((preValue, nextValue) =>
                preValue.Country > nextValue.Country ? 1 : -1
            ) : filterMovies.sort((preValue, nextValue) =>
                preValue.Country < nextValue.Country ? 1 : -1
            )
            return
        }
    }
    const showModalOnClick = (id) => {
        if (!isCheckedConfirm) {
            setShowModal({
                isVisible: true,
                userId: id
            })
            return
        }
        const deleteData = data.filter((val) => {
            return id !== val.imdbID

        })
        setData(deleteData)
        setShowModal({
            isVisible: false
        })

    }
    const boxChecked = (e) => {
        if (e.target.checked) {
            setIsCheckedConfirm(true);

        }

    }
    const closeAlert = (value) => {
        setAlert('')
    }

    const movieDetailShow = (id) => {
        const searchFilterMovies = filterMovies.filter((movie) => {
            return movie.imdbID === id
        })
        setSearchDataShow(searchFilterMovies)
        setSearchBarShow(true)


    }
    const setSearchBarShowOnNav = () => {
        setSearchBarShow(false)
    }
    return (
        <movieContext.Provider value={{ data, fetchData, filterMovies, handleSelectedGenre, selectGenre, setData, pages, paginatedMovies, selectedPageNumber, selectedPage, deleteItem, sortMovies, sortMovieAsc, showModal, showModalOnClick, setShowModal, closeModal, boxChecked, isCheckedConfirm, newSerachData, searchData, serachDataShow, movieDetailShow, searchBarShow, setSearchBarShow, setSearchBarShowOnNav, isAuthenticated, handleOnChange, movieFilterOnSearch, userName, setUserName, userInput, setUserInput, alert, setAlert, closeAlert, editBox, setEditBox, movieEditBox, setEditMovieBox, editMovieBox, movieUpdateBox, update, movieDataShow, addNewMovie, openModel, addMovieBox, setAddMovieBox, addMovieModal, setAddMovieModal }}>{props.children}</movieContext.Provider>
    )
}

export default MovieStateContext






