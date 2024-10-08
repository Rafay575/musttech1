import React from 'react'
import ASSET_PATHS from '../../constant'
import { Link } from 'react-router-dom'

export default function Footer() {
  const iconRoute = ASSET_PATHS.ICON_URL
  const imgRoute = ASSET_PATHS.IMG_URL


  return (
    <>

      <div className='main-footer'>
        <div className='footer'>

          <div className='logo'>
            <img src={`${iconRoute}/logo.svg`} alt='logo' />
          </div>

          <div className='offer'>
            <h4>WE OFFER</h4>
            <ul>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Project Managemnet</li>
              <li>Blockchain Development</li>
              <li>Saas Service</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          <div className='offer'>
            <h4>PAGES</h4>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Service</a></li>
              <li><a href='/'>Pricing</a></li>
              <li><a href='/'>Contact Us</a> </li>
              <li><a href='/'>About Us</a></li>
            </ul>
          </div>

          <div className='offer'>
            <h4>SOCIALS</h4>
            <div className='socail'>
              <Link target='_blank' to="https://www.linkedin.com/company/musttech-solutions/posts/?feedView=all"> <img src={`${iconRoute}/linkIn.svg`} alt='logo' /></Link>
              <Link target='_blank' to="https://www.instagram.com/musttech_01/?igsh=MzcwYnQxeXBja3Zi"> <img src={`${iconRoute}/insta.svg`} alt='logo' /> </Link> 
              <Link target='_blank' to="https://www.facebook.com/people/MustTech-Solutions/61559553398873/?mibextid=ZbWKwL"> <img src={`${iconRoute}/facebook.svg`} alt='logo' /> </Link>
            </div>
            <ul>
              <li className='icon'>
                <img src={`${iconRoute}/map.svg`} alt='logo' />
                <span>Model Town, C-Block Lahore Pakistan</span>
              </li>
              <li className='icon'>
                <img src={`${iconRoute}/phone.svg`} alt='logo' />
                <span>+92 302-6666400</span>
              </li>
              <li className='icon'>
                <img src={`${iconRoute}/email.svg`} alt='logo' />
                <span> <a href='mailto:info@musttechsolutions.com' target='_blank'>info@musttechsolutions.com </a> </span>
              </li>
            </ul>
          </div>

        </div>

        <div className='footer-space'>

        </div>

      </div>

    </>
  )
}
