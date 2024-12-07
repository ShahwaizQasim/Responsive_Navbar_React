import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <nav className='h-20 flex justify-between items-center px-8 text-white bg-black'>
            <div className="logo">
                Shahwaiz
            </div>
            <div className="nav-links">
                <ul className='flex gap-4'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar