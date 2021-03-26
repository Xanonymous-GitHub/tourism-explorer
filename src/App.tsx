import React from 'react'
import './assets/scss/App.scss'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Home} from "./pages/Home";
import {ScenicSpot} from "./pages/ScenicSpots";
import {Notfound} from "./pages/Notfound";

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/ScenicSpot' element={<ScenicSpot/>}/>
                <Route path='/ScenicSpot/:city' element={<ScenicSpot/>}/>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
