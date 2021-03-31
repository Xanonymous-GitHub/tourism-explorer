import React, {useRef, useEffect} from "react"

interface FetchDetectorProps {
    active: boolean
    fetchData: () => Promise<void>
}

export const FetchDetector = ({fetchData, active = false}: FetchDetectorProps): JSX.Element => {
    const observerConfig = {
        rootMargin: '300px',
        threshold: [0]
    }

    const updateObserver = new IntersectionObserver(
        async ([e]) => {
            if (e.intersectionRatio > 0) {
                await fetchData()
            }
        }, observerConfig)

    const detector = useRef<HTMLDivElement>({} as HTMLDivElement)

    useEffect(() => {
        if (active) {
            updateObserver.observe(detector.current)
        } else {
            updateObserver.unobserve(detector.current)
            updateObserver.disconnect()
        }
    }, [active])

    return (
        <div className='bg-transparent h-px relative' ref={detector}/>
    )
}