import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="py-4 w-full">
            <ul className="flex justify-center space-x-25 md:space-x-50 l:space-x-100 w-full responsive">
                <NavLink to="/" className="text-white hover:text-blue-500">
                    <p>Music</p>
                </NavLink>
                <NavLink to="/merch" className="text-white hover:text-blue-500">
                    <p>Merch</p>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navbar
