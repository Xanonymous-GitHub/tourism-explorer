import React, {useState, forwardRef, useImperativeHandle, useEffect, Ref} from "react"
import {TourCard} from "../../../components/TourCard";
import {isNone, Option} from "fp-ts/es6/Option";
import {ScenicSpotTourismInfo} from "../../../types";
import {getScenicSpots, getScenicSpotsByCity} from "../../../api";
import {isEmpty} from "fp-ts/es6/Array";
import './style.scss'

interface CardAreaProps {
    city?: string
    startUpdate: () => void
    stopUpdate: () => void
}

export interface CardAreaExposedInstance {
    updateTourismInfo: (needClean?: boolean) => Promise<void>
    cleanTourismInfo: () => void
}

const MAX_FETCH_COUNT = 30

const fetchTourismInfo = async (city?: string, skip?: number) => {
    let fetchedTourismInfo: Option<Array<ScenicSpotTourismInfo>>

    if (city) {
        fetchedTourismInfo = await getScenicSpotsByCity(city, MAX_FETCH_COUNT, skip)
    } else {
        fetchedTourismInfo = await getScenicSpots(MAX_FETCH_COUNT, skip)
    }

    return fetchedTourismInfo
}

export const CardArea = forwardRef(({city, startUpdate, stopUpdate}: CardAreaProps, ref: Ref<CardAreaExposedInstance>): JSX.Element => {
    const [scenicSpotTourismInfo, setScenicSpotTourismInfo] = useState<Array<ScenicSpotTourismInfo>>([])

    const cleanTourismInfo = () => {
        setScenicSpotTourismInfo([])
    }

    const updateTourismInfo = async (needClean?: boolean) => {
        if (needClean) {
            cleanTourismInfo()
        }

        const skipAmount = scenicSpotTourismInfo?.length
        const fetchedTourismInfo = await fetchTourismInfo(city, needClean ? 0 : skipAmount)
        if (isNone(fetchedTourismInfo)) throw new Error(`fail to fetch TourismInfo!`)
        if (!isEmpty(fetchedTourismInfo.value)) {
            setScenicSpotTourismInfo([
                ...scenicSpotTourismInfo,
                ...fetchedTourismInfo.value
            ])
        } else {
            stopUpdate()
        }
    }

    useImperativeHandle(ref, () => ({
        updateTourismInfo,
        cleanTourismInfo
    } as CardAreaExposedInstance));

    useEffect(() => {
        if (scenicSpotTourismInfo.length) {
            startUpdate()
        }
    }, [scenicSpotTourismInfo.length])

    return (
        <div className='card-container'>
            {
                scenicSpotTourismInfo?.map((info, i) => {
                    return (
                        <TourCard key={info.ID + i} tourismInfo={info}/>
                    )
                })
            }
        </div>
    )
})