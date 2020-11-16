import React from 'react';
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';


import './Home.css';

// images
import product_img_1 from '../../img/new-products/new-product-1.jpg';
import product_img_2 from '../../img/new-products/new-product-2.jpg';
import product_img_3 from '../../img/new-products/new-product-3.jpg';
import product_img_4 from '../../img/new-products/new-product-4.jpg';
import product_img_5 from '../../img/new-products/new-product-5.jpg';
import product_img_6 from '../../img/new-products/new-product-6.jpg';
import product_img_7 from '../../img/new-products/new-product-7.jpg';

function Home() {
    return (
        <div className='home'>
            <section className='home__new-arrival'>
                <div className="text-center home__text">
                    <h4 className="home__text-title text-uppercase fw-bolder ">nuevos productos</h4>
                    <div className="home-line"></div>
                </div>
                <div className='home__new-arrival-product d-flex align-items-center px-4'>
                    <div className='home__new-arrival-left '>
                        <img className='w-100 ' src={product_img_7} alt="" />
                    </div>
                    <div className="carousel slide d-flex text-center w-75 home__new-arrival-right" id='home-carousel' data-ride='carousel'>
                        <div className="carousel-inner">
                            <div className="carousel-item  active">
                                <div className='card p-1 mx-1 d-inline-flex flex-column'>
                                    <img className='d-inline' src={product_img_1} alt="product img" />
                                    <p className=''> Lorem Beauty </p>
                                    <span>$ 45 030</span>
                                </div>
                                <div className='card p-1 mx-1 d-inline-flex flex-column'>
                                    <img className='d-inline' src={product_img_2} alt="product img" />
                                    <p className=''> Lorem ipsum </p>
                                    <span>$ 10 990</span>
                                </div>
                                <div className='card p-1 mx-1 d-inline-flex flex-column'>
                                    <img className='d-inline' src={product_img_3} alt="product img" />
                                    <p className=''> Lorem Perfum </p>
                                    <span>$ 12 100</span>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className='card p-1 mx-1 d-inline-flex flex-column'>
                                    <img className='d-inline' src={product_img_4} alt="product img" />
                                    <p className=''> Smart Watch </p>
                                    <span>$ 5 450</span>
                                </div>
                                <div className='card p-1 mx-1 d-inline-flex flex-column'>
                                    <img className='d-inline' src={product_img_5} alt="product img" />
                                    <p className=''> Iphone ipsum </p>
                                    <span>$ 16 090</span>
                                </div>
                                <div className='card p-1 mx-1 d-inline-flex flex-column'>
                                    <img className='d-inline' src={product_img_6} alt="product img" />
                                    <p className=''> Ipad ipsum </p>
                                    <span>$ 22 300</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Home Categories */}
            <section className="home__categories d-flex p-5">
                <div className='home__category-left'>
                    <div className="home__category-gender">
                        <div className='home__category-gender-text justify-content-center flex-column d-flex'>
                            <span className='mb-3'>Moda y estilo</span>
                            <h4>Hombres & Mujeres</h4>
                            <span>26% OFF</span>
                            <button className='btn text-uppercase mt-3 '>comprar</button>
                        </div>
                    </div>
                </div>
                <div className='home__category-right'>
                    <div className='home__category-electro '>
                        <div className='home__category-electro-text justify-content-center flex-column d-flex'>
                            <span className='mb-3'>Tecnología</span>
                            <h4>Electronica</h4>
                            <span>Hasta 50% OFF</span>
                            <button className='btn text-uppercase mt-1'>comprar</button>
                        </div>
                    </div>
                    <div className='home__category-beauty '>
                        <div className='home__category-beauty-text justify-content-center flex-column d-flex'>
                            <h4>Belleza</h4>
                            <span>30% OFF</span>
                            <button className='btn text-uppercase mt-3 '>comprar</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home__banner">
                <div className="home__banner-main">
                    <div className="home__banner-text">
                        <p className='text-muted'>solo por pocos dias</p>
                        <h2>  <span>15%</span> descuento</h2>
                        <button className='btn  m-4 text-uppercase'>comprar ahora</button>
                    </div>
                </div>
            </section>

            {/* Footer */}

            <footer className='mt-5'>
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

export default Home
