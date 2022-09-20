import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";
import MovieStateContext from './context/Movie/MovieStateContext';
import Movies from './components/Movies/Movies';
import Alerts from './components/Alert/Alert';

const App = () => {
    return (
        <>

            <MovieStateContext>
                <BrowserRouter>
                    <Alerts />
                    <Routes>
                        <Route path="/" element={<Movies />} />
                    </Routes>
                </BrowserRouter>
            </MovieStateContext>

        </>
    )
}

export default App


