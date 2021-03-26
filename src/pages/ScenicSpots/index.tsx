import React from "react"
import {useParams} from 'react-router-dom'

export const ScenicSpot = (): JSX.Element => {
    const {city} = useParams()

    return (
        <div>
            {city}
            ScenicSpot
        </div>
    )
}