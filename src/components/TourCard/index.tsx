import React from "react"
import {ScenicSpotTourismInfo} from "../../types";

export const TourCard = (props: any): JSX.Element => {
    const tourismInfo = props['tourism-info'] as ScenicSpotTourismInfo

    const {
        Name,
        Picture,
        Description
    } = tourismInfo

    return (
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80">
            <img className="max-h-40 w-full object-cover" alt='tour card'
                 src={Picture?.PictureUrl1 || Picture?.PictureUrl2 || Picture?.PictureUrl3}/>
            <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-indigo-500 text-md font-medium">
                    Article
                </p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {Name}
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {Description}
                </p>
            </div>
        </div>
    )
}