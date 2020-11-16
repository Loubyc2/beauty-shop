import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { WiDirectionRight } from 'react-icons/wi'

// import header_banner from '../../img/banner/header-banner.jpg'

import './Header.css'

function Header() {
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScroll(false)
            } else setScroll(true)
        })
        return () => {
            window.removeEventListener('scroll', setScroll(false));
        }
    }, [])


    return (
        <div className='header mb-5'>
            <div className='header__main d-flex w-100'>

                <div className={scroll ? 'header-content d-flex align-items-center justify-content-between w-100 px-5' : 'scroll'}>
                    <NavLink to='./' className="navbar-brand header-left" >Lb Design</NavLink>
                    <div className='header-right'>
                        <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                            <div className=" container-fluid">
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className='navbar-nav'>
                                        <li className="nav-item">
                                            <NavLink to='/' className="nav-link activated" activeStyle={{ color: '#ec524b' }}  >Inicio</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/' className="nav-link" >Tienda</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/' className="nav-link" >Categorías</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/' className="nav-link">Contacto</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='header-bar-separator'>|</div>
                            <div className="header-account d-flex">
                                <BiSearch className='mx-2 header-search' />
                                <FiShoppingCart className='header-cart' />
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>


                    </div>
                </div>

                <div className="header__banner-text ml-5">
                    <small><Link className='text-decoration-none' to='/'>descubre las ofertas que tenemos para ti <span><WiDirectionRight style={{ marginLeft: '-10px' }} size={46} /></span></Link> </small>
                    <h1 className='fw-bold'>Best Beauty Items</h1>
                    <p className='w-50'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores commodi ab mollitia
                        dolorum, maxime perspiciatis quas temporibus. Temporibus, id.
                    </p>
                    <button className='btn btn-outline-success text-uppercase'> comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Header
