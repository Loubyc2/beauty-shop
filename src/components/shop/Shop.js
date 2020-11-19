import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Shop.css'
import Product from './products';


import image from '../../img/shop-product/product-1.jpg'
const Shop = () => {
    const [value, setValue] = useState(10)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='shop'>
            <div className='shop-content'>
                {/* header */}
                <nav className="navbar mb-3 navbar-expand-lg navbar-light px-5">
                    <NavLink to='./' className="navbar-brand header-left" >Lb Design</NavLink>
                    <div className=" ml-auto">
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
                    {/* <div className='header-bar-separator'>|</div>
                        <div className="">
                            <BiSearch className='mx-2 header-search' />
                            <FiShoppingCart className='header-cart' />
                        </div> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                {/* main */}
                <div className="shop-main container-fluid row">
                    <div className='sidebar p-3 col-3  '>
                        <div className="card my-3 p-3 categories bg-transparent">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input rounded-0" type="checkbox" id="all" />
                                <label className="form-check-label all" htmlFor="all">Todo</label>
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
                    <div className='shop-main  col-9 p-4'>
                        {Product.map(item => (
                            <div className='card border-0 bg-transparent col-3 my-2 p-1'>
                                <div className='card-item p-1'>
                                    <img className='' src={item.img} alt='img' />
                                    <p className='mb-0 text-center'>{item.title}</p>
                                    <div className='d-flex justify-content-around'>
                                        <span>${item.price}</span>
                                        <span>{item.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Shop;

