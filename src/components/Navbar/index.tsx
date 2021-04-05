import React from "react"
import {DropDown} from "./DropDown";

export const Navbar = (): JSX.Element => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full relative">
                        <div className="flex-shrink-0 flex items-center h-full relative">
                            <img className="block md:hidden h-5/6 w-auto"
                                 src="https://i.imgur.com/v2mpZLd.webp" alt="Workflow"/>
                            <img className="hidden md:block h-5/6 relative w-auto"
                                 src="https://i.imgur.com/alnkukQ.webp"
                                 alt="Workflow"/>
                        </div>
                        <div className="block sm:ml-6 my-auto">
                            <div className="flex space-x-4">
                                <DropDown/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}