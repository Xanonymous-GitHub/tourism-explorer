import React from "react"
import {ScenicSpotTourismInfo} from "../../types";

export const TourCard = (props: any): JSX.Element => {
    const tourismInfo = props['tourism-info'] as ScenicSpotTourismInfo

    const {
        Name,
        Picture,
        Description,
        City
    } = tourismInfo

    console.log(Picture)

    return (
        <div className="overflow-hidden shadow-lg rounded-lg h-120 w-full md:w-80">
            <img className="max-h-40 h-40 w-full object-cover" alt='tourism image'
                 src={Picture?.PictureUrl1 || Picture?.PictureUrl2 || Picture?.PictureUrl3 || 'https://i.imgur.com/0WbpreU.webp'}/>
            <div className="bg-white dark:bg-gray-800 w-full p-4 overflow-scroll h-80 rounded-b-lg">
                <p className="text-indigo-500 text-md font-medium">
                    {City}
                </p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {Name}
                </p>
                <p className="text-gray-500 dark:text-gray-300 font-light text-md">
                    {Description}
                </p>
            </div>
        </div>
    )
}