import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'virtual:windi.css'
import './index.scss'

import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    )
    new BScroll('#root', {
        observeDOM: true,
        scrollY: true,
    })
})
