import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {getScenicSpots, getScenicSpotsByCity} from "../../api";
import {ScenicSpotTourismInfo} from "../../types";
import {isNone, Option} from "fp-ts/es6/Option";
import './style.scss'

import {TourCard} from "../../components/TourCard";

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
        <>
            <div className='card-container bg-white dark:bg-gray-700'>
                {
                    scenicSpotTourismInfo?.map((info, i) => {
                        return (
                            <TourCard key={info.ID} tourism-info={info}/>
                        )
                    })
                }
            </div>
        </>
    )
}