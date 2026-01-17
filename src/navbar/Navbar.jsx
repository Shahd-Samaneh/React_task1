import React from 'react'
import style from './Navbar.module.css'

export default function Navbar() {
    return (<header className='header '>
        <nav className={`${style["bg-color"]} navbar navbar-expand-lg py-5`}>
            <div className="container justify-content-between">

                <div>
                    <a className={`${style["font-color"]} navbar-brand`} href="#">START BOOTSTRAP</a>
                </div>

                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className={`${style["font-color"]} navbar-nav ms-auto`}>
                        <a className={`${style["font-color"]} nav-link`} aria-current="page" href="#">PROTOFILE</a>
                        <a className={`${style["font-color"]} nav-link`} href="#">ABOUT</a>
                        <a className={`${style["font-color"]} nav-link`} href="#">CONTACT</a>
                    </div>
                </div>

            </div>
        </nav>
    </header>

    )
}
