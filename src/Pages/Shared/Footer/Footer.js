import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const today = new Date();
const year = today.getFullYear();



const Footer = () => {
    return (
        <footer>
            <div className='container-fluid bg-secondary py-5 text-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 text-center">
                            <h3>Mejbah & Mind</h3>
                            <h5>A news service website...</h5>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <p className='mt-4'><Link className='text-light text-decoration-none border rounded-pill p-2' to="/about">About</Link></p>
                            <p className='mt-4'><Link className='text-light text-decoration-none border rounded-pill p-2' to="/contact">Contant Me</Link></p>
                            <p className='mt-4'><Link className='text-light text-decoration-none border rounded-pill p-2' to="/breaking">My Projects</Link></p>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <p className='mt-4'><Link className='text-light text-decoration-none border rounded-pill p-2' to="/">Home</Link></p>
                            <p className='mt-4'><Link className='text-light text-decoration-none border rounded-pill p-2' to="/resume">Resume</Link></p>
                            <p className='mt-4'><Link className='text-light text-decoration-none border rounded-pill p-2' to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#0b1228' }} className='text-center text-light py-2'>
                <p><small> &copy; {year} Mejbah & Mind. All rights reserved.</small></p>
            </div>
        </footer>
    );
};

export default Footer;