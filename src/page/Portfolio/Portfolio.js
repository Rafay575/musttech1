import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Portfolio.css';

export default function Portfolio() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL

  return (
    <>
      <Layout>
        <div className='portfolio'>

          <div class="portfolio-header">
            <h1>PORTFOLIO</h1>
            <p>Transforming Your Concepts into Concrete Achievements.</p>
          </div>

          <nav class="portfolio-nav">
            <ul>
              <li><a href="#" class="active">All</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Mobile App</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">UI Kits</a></li>
            </ul>
          </nav>


          <div className='grid'>
            <div className='col-1'>
              <div className='box'>
                <img src={`${imgRoute}/p1.png`} alt='icon' />
              </div>
              <div className='box'>
                <img src={`${imgRoute}/p2.png`} alt='icon' />
              </div>

            </div>

            <div className='col-2'>

              <div className='box'>
                <img src={`${imgRoute}/p3.png`} alt='icon' />
              </div>
              <div className='box'>
                <img src={`${imgRoute}/p4.png`} alt='icon' />
              </div>
              <div className='box'>
                <img src={`${imgRoute}/p5.png`} alt='icon' />
              </div>

            </div>

            <div className='col-3'>
              <div className='box'>
                <img src={`${imgRoute}/p6.png`} alt='icon' />
              </div>
              <div className='box'>
                <img src={`${imgRoute}/p7.png`} alt='icon' />
              </div>
              <div className='box'>
                <img src={`${imgRoute}/p8.png`} alt='icon' />
              </div>
            </div>

          </div>


        </div>
      </Layout>
    </>
  )
}
