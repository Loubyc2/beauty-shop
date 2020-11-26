import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa'

import './Shop.css'
import Product from './products';
import { useStateValue } from '../../StateProvider';

const Shop = () => {
    const [{ basket }] = useStateValue()
    const [state, dispatch] = useStateValue()
    const [value, setValue] = useState(10);
    const [checked, setChecked] = useState(true);
    const [size, setSize] = useState(window.innerWidth)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleCheck = () => {
        setChecked(!checked)
    }

    const addToBasket = (item) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            items: {
                ...state,
                items: {
                    id: item.id
                }
            }
        })
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        })
    })
    return (
        <div className='shop'>
            {size}
            <div className='shop-content'>
                {/* header */}
                <nav className="navbar mb-3 navbar-expand-lg navbar-light px-5">
                    <NavLink to='./' className="navbar-brand header-left" >Lb Design</NavLink>
                    <div className="ml-auto shop-links">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className='navbar-nav'>
                                <li className="nav-item">
                                    <NavLink exact to='/' className="nav-link activated" activeStyle={{ color: '#ec524b' }}  >Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/shop' className="nav-link" activeStyle={{ color: '#ec524b' }}>Tienda</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/category' className="nav-link" >Categorías</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact' className="nav-link">Contacto</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="shop-cart">
                        <div className='header-bar-separator'>|</div>
                        <div className="header-account d-flex align-items-center">
                            <BiSearch className='mx-2 header-search' />
                            <div className='d-flex align-items-center' style={{ position: 'relative' }}>
                                <FiShoppingCart className='header-cart' />
                                <span className='header-cart-items'>{basket.length}</span>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                {/* main */}
                <div className="shop-main container-fluid">
                    <div className='sidebar p-2'>
                        <div className="card my-3 p-3 categories bg-transparent">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input rounded-0" type="checkbox" id="all" onChange={handleCheck} checked={checked} />
                                <label className="form-check-label all" htmlFor="all" >Todo</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input rounded-0" type="checkbox" id="women" />
                                <label className="form-check-label" htmlFor="women">- Mujeres</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input rounded-0" type="checkbox" id="men" />
                                <label className="form-check-label" htmlFor="men">- Hombres</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input rounded-0" type="checkbox" id="tecno" />
                                <label className="form-check-label" htmlFor="tecno">- Belleza</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input rounded-0" type="checkbox" id="tecno" />
                                <label className="form-check-label" htmlFor="tecno">- Tecnología</label>
                            </div>
                        </div>

                        <div className="card p-3 rounded-0 bg-transparent search">
                            <label htmlFor="" className='form-label text-muted'>Buscar</label>
                            <input type="text" className="form-control bg-light" />
                            <button className='btn btn-warning my-2'>ir</button>
                        </div>
                        <div className="card filter bg-transparent my-3 p-3 rounded-0">
                            <label htmlFor="" className="form-label text-uppercase text-muted">Filtrar por</label>
                            <select className="form-select" aria-label="Default s">
                                <option selected>Filtrar producto por</option>
                                <option value="1">Nombre (A-Z)</option>
                                <option value="2">Talla</option>
                            </select>
                        </div>
                        <div className="card filter-price bg-transparent my-3 p-3 rounded-0">
                            <label htmlFor="" className="form-label text-uppercase text-muted text-capitalize">Filtrar por precio</label>
                            <div className="d-flex justify-content-center my-4">
                                <div className="w-75">
                                    <input type="range" className="custom-range" id="customRange" min="10.000" max="45000" value={value} onChange={handleChange} />
                                    <p>${value}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {checked ?
                        <div className='shop-product p-4'>
                            {Product.map(item => (
                                <div className='card bg-transparent'>
                                    <img className='card-img-top' src={item.img} alt='img' />
                                    <div className="card-body ">
                                        <div className="card-text">
                                            <p className='mb-0 text-center'>{item.title}</p>
                                            <div className='d-flex justify-content-around mb-0'>
                                                <span>${item.price}</span>
                                                <div className='d-flex shop-rating'>
                                                    <span className='d-flex'> {Array(item.rating_pos).fill().map((_) => <p>&#9733;</p>)}</span>
                                                    <span className='d-flex'> {Array(item.rating_neg).fill().map((_) => <p>&#9734;</p>)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-toShop">
                                        <button className='btn btn-primary' onClick={() => addToBasket(item)}>Comprar</button>
                                    </div>
                                </div>
                            ))}
                        </div> : null}
                </div>

            </div>
            {/* Footer */}

            <footer className='' style={{ backgroundColor: '#bbbfca' }}>
                <div className="main-footer pt-4 px-5">
                    <h4>nuestro newsletter</h4>
                    <p>Suscribirse para recibir las ultimas ofertas</p>
                    <form className="row w-50 mx-auto mt-2 mb-4">
                        <div className="col-10">
                            <input type="text" className="form-control  text-capitalize" id="inputTex" placeholder="ingresa tu email" />
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary  text-uppercase">suscribirse</button>
                        </div>
                    </form>
                    <div className="footer-icons my-2">
                        <Link to='/'><FaIcons.FaFacebook size={26} className='facebook-icon' /></Link>
                        <Link to='/'><FaIcons.FaTwitter size={26} className='twitter-icon' /></Link>
                        <Link to='/'> <FaIcons.FaInstagram size={26} className='instagram-icon' /></Link>
                    </div>
                    <p className=''>&copy; 2020 Lb Design</p>
                </div>

            </footer>
        </div>
    )
}
export default Shop;

