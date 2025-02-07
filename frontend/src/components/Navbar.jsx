import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=''>
            <ul className='flex justify-center space-x-10'>
                <NavLink to="/" className=''>
                    <p>Music</p>
                </NavLink>
                <NavLink to="/merch" className=''>
                    <p>Merch</p>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navbar
