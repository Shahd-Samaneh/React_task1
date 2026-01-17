import React from 'react'
import style from './Hero.module.css'
import avatar from '../assets/imgs/avataaars.svg';
import style2 from '../navbar/Navbar.module.css'

export default function Hero() {
    return (
       <section className={`${style["bg-color"]}  hero py-5`}>
    <div className='container'>
        <div className='d-flex gap-4 flex-column justify-content-center align-items-center text-center'>

            <div className='hero-img w-25'>
                <img src={avatar} alt="avatar" className='img-fluid' />
            </div>

            <h1 className={`${style2["font-color"]} mt-3`}>START BOOTSTRAP</h1>

            <p className={`${style2["font-color"]} mt-2`}>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
</section>

    )
}
