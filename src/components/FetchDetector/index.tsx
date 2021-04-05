import React, {useRef, forwardRef, useImperativeHandle, Ref} from "react"

interface FetchDetectorProps {
    fetchData: () => Promise<void>
}

export interface FetchDetectorExposeInstance {
    startObserver: () => void
    stopObserver: () => void
}

const observerConfig = {
    rootMargin: '300px',
    threshold: [0]
}

export const FetchDetector = forwardRef(({fetchData}: FetchDetectorProps, ref: Ref<FetchDetectorExposeInstance>): JSX.Element => {
    const active = useRef<boolean>(false)

    const updateObserver = new IntersectionObserver(
        async ([e]) => {
            if (active.current && e.isIntersecting && e.intersectionRatio > 0) {
                await fetchData()
            }
        }, observerConfig)

    const detector = useRef<HTMLDivElement>({} as HTMLDivElement)

    const startObserver = () => {
        updateObserver.observe(detector.current)
        active.current = true
    }
    const stopObserver = () => {
        active.current = false
        updateObserver.unobserve(detector.current)
        updateObserver.disconnect()
    }

    useImperativeHandle(ref, () => ({
        startObserver,
        stopObserver,
    } as FetchDetectorExposeInstance))

    return (
        <div className='bg-transparent h-px relative' ref={detector}/>
    )
})