import React from "react"

interface FetchDetectorProps {
    fetchData: () => Promise<void>
}

export const FetchDetector = ({fetchData}: FetchDetectorProps): JSX.Element => {
    return (
        <div>
            FetchDetector
        </div>
    )
}