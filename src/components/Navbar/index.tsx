import React from "react"
import {DropDown} from "./DropDown";
import {Link} from "react-router-dom";

export const Navbar = (): JSX.Element => {
    return (
        <nav className="bg-gray-800 fixed w-screen top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div
                        className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full relative">
                        <Link to='/' rel='noreferrer noopener' className="flex-shrink-0 flex items-center h-full relative">
                            <img className="block md:hidden h-2/3 w-auto"
                                 src="https://i.imgur.com/v2mpZLd.webp" alt="Workflow"/>
                            <img className="hidden md:block h-5/6 relative w-auto"
                                 src="https://i.imgur.com/alnkukQ.webp"
                                 alt="Workflow"/>
                        </Link>
                        <div className="block sm:ml-6 my-auto">
                            <div className="flex space-x-4">
                                <DropDown/>
                            </div>
                        </div>
                    </div>
                    <a rel='noreferrer noopener' target="_blank"
                       href="https://github.com/Xanonymous-GitHub/tourism-explorer"
                       className="rounded-full h-full py-5 sm:py-4 my-auto">
                        <svg className="rounded-full h-full my-auto" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <rect width="512" height="512" rx="15%" fill="#1B1817"/>
                            <path fill="#fff"
                                  d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    )
}