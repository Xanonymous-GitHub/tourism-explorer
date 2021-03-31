import React, {useEffect, useState, useRef} from "react"
import {useParams} from 'react-router-dom'
import {getScenicSpots, getScenicSpotsByCity} from "../../api";
import {ScenicSpotTourismInfo} from "../../types";
import {isNone, Option} from "fp-ts/es6/Option";
import {isEmpty} from "fp-ts/es6/Array";
import './style.scss'

import {TourCard} from "../../components/TourCard";
import {FetchDetector} from "../../components/FetchDetector";

const MAX_FETCH_COUNT = 30

export const ScenicSpot = (): JSX.Element => {
    const {city} = useParams()
    const [scenicSpotTourismInfo, setScenicSpotTourismInfo] = useState<Array<ScenicSpotTourismInfo>>()
    const [updateDetectorActive, setDetectorActive] = useState<boolean>(false)
    const tourismInfoState = useRef<Array<ScenicSpotTourismInfo>>()

    tourismInfoState.current = scenicSpotTourismInfo

    const fetchTourismInfo = async () => {
        let fetchedTourismInfo: Option<Array<ScenicSpotTourismInfo>>

        if (Boolean(city)) {
            fetchedTourismInfo = await getScenicSpotsByCity(city, MAX_FETCH_COUNT, tourismInfoState.current?.length)
        } else {
            fetchedTourismInfo = await getScenicSpots(MAX_FETCH_COUNT, tourismInfoState.current?.length)
        }

        if (isNone(fetchedTourismInfo)) throw new Error(`fail to fetch TourismInfo!`)

        if (!isEmpty(fetchedTourismInfo.value)) {
            setScenicSpotTourismInfo([
                ...(tourismInfoState.current ? tourismInfoState.current : []),
                ...fetchedTourismInfo.value
            ])
        } else {
            setDetectorActive(false)
        }
    }

    useEffect(() => {
        fetchTourismInfo().then(
            () => setDetectorActive(true)
        )
    }, [])

    return (
        <div className='bg-white dark:bg-gray-700 min-h-screen'>
            <div className='card-container'>
                {
                    scenicSpotTourismInfo?.map((info, i) => {
                        return (
                            <TourCard key={info.ID + i} tourismInfo={info}/>
                        )
                    })
                }
            </div>
            <FetchDetector fetchData={fetchTourismInfo} active={updateDetectorActive}/>
        </div>
    )
}