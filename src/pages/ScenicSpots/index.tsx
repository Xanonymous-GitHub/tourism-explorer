import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {getScenicSpots, getScenicSpotsByCity} from "../../api";
import {ScenicSpotTourismInfo} from "../../types";
import {isNone, Option} from "fp-ts/es6/Option";

const MAX_FETCH_COUNT = 30

export const ScenicSpot = (): JSX.Element => {
    const {city} = useParams()
    const [scenicSpotTourismInfo, setScenicSpotTourismInfo] = useState<Array<ScenicSpotTourismInfo>>()
    const fetchedAmount = scenicSpotTourismInfo?.length

    const fetchTourismInfo = async () => {
        let fetchedTourismInfo!: Option<Array<ScenicSpotTourismInfo>>

        if (Boolean(city)) {
            fetchedTourismInfo = await getScenicSpotsByCity(city, MAX_FETCH_COUNT, fetchedAmount)
        } else {
            fetchedTourismInfo = await getScenicSpots(MAX_FETCH_COUNT, fetchedAmount)
        }

        if (isNone(fetchedTourismInfo)) throw new Error(`fetchedTourismInfo is none!`)
        setScenicSpotTourismInfo([
            ...(scenicSpotTourismInfo ? scenicSpotTourismInfo : []),
            ...fetchedTourismInfo.value
        ])
    }

    useEffect(() => {
        fetchTourismInfo().catch(
            reason => console.warn(reason)
        )
    }, [])

    return (
        <div>
            {city} <br/>
            {(JSON.stringify(scenicSpotTourismInfo))}
            <button onClick={fetchTourismInfo}>get</button>
        </div>
    )
}