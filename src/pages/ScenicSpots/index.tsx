import React, {
    useRef,
    useEffect,
    useLayoutEffect,
    useCallback,
} from "react"
import {useParams} from 'react-router-dom'

import {FetchDetector, FetchDetectorExposeInstance} from "../../components/FetchDetector";
import {Navbar} from "../../components/Navbar";
import {CardArea, CardAreaExposedInstance} from "./CardArea";

export const ScenicSpot = (): JSX.Element => {
    const {city} = useParams()

    const cardArea = useRef<CardAreaExposedInstance>({} as CardAreaExposedInstance)
    const fetchDetector = useRef<FetchDetectorExposeInstance>({} as FetchDetectorExposeInstance)

    let cardAreaKey = useRef(0)
    let fetchDetectorKey = useRef(0)

    const updateTourismInfo = useCallback(async (needClean?: boolean) => {
        await cardArea.current.updateTourismInfo(needClean)
    }, [city])

    useLayoutEffect(() => {
        fetchDetector.current.stopObserver()
    }, [city])

    useEffect(() => {
        cardAreaKey.current++
        fetchDetectorKey.current++
        updateTourismInfo(true).then()
    }, [city])

    return (
        <>
            <Navbar/>
            <div className='bg-white dark:bg-gray-700 min-h-screen relative mt-16'>
                <CardArea ref={cardArea} city={city}
                          startUpdate={() => fetchDetector.current.startObserver()}
                          stopUpdate={() => fetchDetector.current.stopObserver()}
                          key={'card-area' + cardAreaKey.current}/>
                <FetchDetector fetchData={updateTourismInfo} ref={fetchDetector}
                               key={'fetch-detector' + fetchDetectorKey.current}/>
            </div>
        </>
    )
}