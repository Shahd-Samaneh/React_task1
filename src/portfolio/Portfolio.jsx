import React from 'react'
import style from './Portfolio.module.css'

import cabin from '../assets/imgs/cabin.png'
import cake from '../assets/imgs/cake.png'
import circus from '../assets/imgs/circus.png'
import game from '../assets/imgs/game.png'
import safe from '../assets/imgs/safe.png'
import submarine from '../assets/imgs/submarine.png'

export default function Portfolio() {
  return (
    <section className={style.portfolioSection}>
      <div className="container">
        <h2 className='text-center fw-bold mt-5'>PORTFOLIO</h2>
        
        <div className='row g-4 mt-4'>

          <div className='col-md-4'>
            <div className={style.box}>
              <img src={cabin} className='img-fluid' alt='cabin' />
            </div>
          </div>

          <div className='col-md-4'>
            <div className={style.box}>
              <img src={cake} className='img-fluid' alt='cake' />
            </div>
          </div>

          <div className='col-md-4'>
            <div className={style.box}>
              <img src={circus} className='img-fluid' alt='circus' />
            </div>
          </div>

          <div className='col-md-4'>
            <div className={style.box}>
              <img src={game} className='img-fluid' alt='game' />
            </div>
          </div>

          <div className='col-md-4'>
            <div className={style.box}>
              <img src={safe} className='img-fluid' alt='safe' />
            </div>
          </div>

          <div className='col-md-4'>
            <div className={style.box}>
              <img src={submarine} className='img-fluid' alt='submarine' />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
