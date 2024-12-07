import React, { useState } from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handelToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className='h-20 flex justify-between items-center px-8 text-white bg-black'>
            <div className="logo text-2xl">
                Shahwaiz
            </div>
            <div>
                <ul className={`${isOpen ? 'nav-links-active' : 'nav-links'}`}>
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
            <div className='response-btn' >
                <FontAwesomeIcon icon={faBars} className='text-3xl' onClick={handelToggle} />
            </div>
        </nav>
    )
}

export default Navbar