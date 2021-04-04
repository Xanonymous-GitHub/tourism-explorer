import React, {useMemo, useRef} from "react"
import './style.scss'
import {cityData} from "../../../utils/cities";

export const DropDown = (): JSX.Element => {
    const cities = useMemo(() => cityData, [])

    return (
        <div className="px-10">
            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Dropdown</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 max-h-96 overflow-scroll">
                    {
                        cities.map(city =>
                            <li key={city.id}
                                className="bg-gray-200 hover:bg-gray-400 active:bg-gray-500 py-2 px-4 block whitespace-no-wrap select-none cursor-pointer">
                                {city.name}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}