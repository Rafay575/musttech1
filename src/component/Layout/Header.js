import React, { useState } from 'react'
import ASSET_PATHS from '../../constant'
import { Link } from 'react-router-dom'

export default function Header() {

    const iconRoute = ASSET_PATHS.ICON_URL

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='header'>

                <div className='logo'>
                    <Link to="/"> <img src={`${iconRoute}/logo.svg`} alt='logo' /> </Link>
                </div>

                <div className='nav-links'>

                    <i class="fa fa-bars" aria-hidden="true"

                        onClick={() => setShow(!show)}
                    ></i>

                    <ul className={`${show ? 'show' : ''}`}>

                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/service">Services</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}
