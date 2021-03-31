import React from "react"

export const Navbar = (): JSX.Element => {
    return (
        <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
            <div className="flex items-center justify-between mb-4 md:mb-0">
                <h1 className="leading-none text-2xl text-grey-darkest">
                    Tourism Explorer
                </h1>
            </div>

            <nav>
                <ul className="list-reset md:flex md:items-center">
                    <li className="md:ml-4 border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
                        Contact
                    </li>
                    <li className="md:ml-4 border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
                        Contact
                    </li>
                    <li className="md:ml-4 border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}