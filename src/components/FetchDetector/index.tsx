import React, {useRef, useEffect} from "react"

interface FetchDetectorProps {
    active: boolean
    fetchData: () => Promise<void>
}

const observerConfig = {
    rootMargin: '300px',
    threshold: [0]
}

export const FetchDetector = ({fetchData, active = false}: FetchDetectorProps): JSX.Element => {
    const updateObserver =  useRef<IntersectionObserver>(new IntersectionObserver(
        async ([e]) => {
            if (e.intersectionRatio > 0) {
                await fetchData()
            }
        }, observerConfig))

    const detector = useRef<HTMLDivElement>({} as HTMLDivElement)

    useEffect(() => {
        if (active) {
            updateObserver.current.observe(detector.current)
        } else {
            updateObserver.current.unobserve(detector.current)
            updateObserver.current.disconnect()
        }
    }, [active])

    return (
        <div className='bg-transparent h-px relative' ref={detector}/>
    )
}