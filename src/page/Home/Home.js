import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

export default function Home() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <>
      <Layout>
        <div className='home'>

          <div className='hero-seciton'>
            <div className='content'>
              <h1>Crafting Digital Excellence Your Vision, <span>
                Our Expertise.
              </span></h1>
              <p>
                Transforming Your Concepts into Concrete Achievements.|                </p>
            </div>

            <div className='image'>
              <img src={`${imgRoute}/img_1.png`} alt='img_1' />
            </div>

          </div>

          <div className='detail-section'>

            <div className='detail'>
              <div className='title'>
                <img src={`${iconRoute}/user.svg`} alt='img_1' />
                {/* <span> Full Name</span> */}
                <input type="text" placeholder="Full Name" />
              
              </div>
              <div className='title'>
                <img src={`${iconRoute}/email2.svg`} alt='img_1' />
                {/* <span>Email Address</span> */}
                <input type="text" placeholder="Email Address" />

              </div>
              <div className='title'>
                <img src={`${iconRoute}/phone.svg`} alt='img_1' />
                {/* <span>Phone Number</span> */}
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className='btn'>
                <button> Get Started </button>
              </div>
            </div>

          </div>

          <div className='about-section'>
            <h1>WHAT WE DO?</h1>
            <div className='about-hero'>

              <div className='about-content'>
                <p>
                  We turn your digital dreams into reality, providing top-tier tech solutions to empower your business and enhance user experiences. Our expertise spans a wide range of services, including web and mobile applications, custom software development, staff augmentation, project management, and social media marketing. With a relentless focus on innovation, we deliver cutting- edge solutions that transform concepts into robust software solutions. Let us be your partner in making your digital dream a reality.
                </p>
              </div>

              <div className='about-image'>
                <img src={`${imgRoute}/img_2.png`} alt='img_2' />
              </div>

            </div>
          </div>

          <div className='completion-section'>

            <div className='box'>
              <img src={`${imgRoute}/check.png`} alt='img_1' />
              <span>100+</span>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className='box'>
              <img src={`${imgRoute}/rating.png`} alt='img_1' />
              <span>100+</span>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className='box'>
              <img src={`${imgRoute}/git.png`} alt='img_1' />
              <span>100+</span>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className='box'>
              <img src={`${imgRoute}/cycle.png`} alt='img_1' />
              <span>100+</span>
              <p>PROJECTS COMPLETED</p>
            </div>

          </div>

          <div className='services-section'>

            <div className='our-services'>
              <h1> OUR SERVICES </h1>
              <p>Our software house offering the best quality IT services & solutions. We have the best team of experienced web developers & graphic designers. </p>
            </div>

            <div className='main-serices'>
              <div className='service-col-1'>
                <div className='service-card'>
                  <img src={`${iconRoute}/grow.svg`} alt='icon' />
                  <h1>Digital Marketing</h1>
                  <p>The world is currently online,
                    as a brand or company in
                    order to reach more
                    customers as possible with
                    digital marketing.</p>
                </div>
              </div>

              <div className='service-col-2'>
                <div className='service-card'>
                  <img src={`${iconRoute}/website.svg`} alt='icon' />
                  <h1>Web Development</h1>
                  <p>A website is a central tool for
                    the visibility of a business on
                    the Internet. Dynamic
                    Developers Offers the Best
                    quality Websites.</p>
                </div>

              </div>

              <div className='service-col-1'>

                <div className='service-card'>
                  <img src={`${iconRoute}/uiux.svg`} alt='icon' />
                  <h1>UI/UX DESIGN</h1>
                  <p>Blend aesthetics with user-friendly
                    functionality for designs that stand out.</p>
                </div>

              </div>
            </div>

            <div className='services-btn'>
              <button className="more-button">
                MORE
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
              </button>

            </div>

          </div>

          <div className='tech-section'>
            <h1>OUR CORE TECHNALOGIES</h1>
            <div className='tech-hero'>
              <div className='tech-content'>
                <p>MustTech works under various modern technologies for
                  effective, scalable, and future-proof custom software
                  development. Ranging from iOT to AI and even VR, we have
                  had our fair share of expertise in all productive
                  technological projects. Smart factory, smart hospital,
                  smart farms and even iOT security system are part of the
                  iOT world we have explored. Virtual agents, risk assessment
                  and even speech recognition for navigation are part of
                  some projects we have covered under the AI category.
                </p>
              </div>
              <div className='tech-image'>
                <img src={`${imgRoute}/tech.png`} alt='img_2' />
              </div>
            </div>
          </div>

          <div className='review-section '>
            <img src={`${imgRoute}/comment.png`} alt='img_2' />

            <div className='review-carasal'>

              <div style={{ width: '80%', margin: '0 auto' }}>
                <Slider {...settings}>
                  <div>
                    <p>They made an amazing website that not only looks great but is also easy for my users. They mixed my ideas with their skills so
                      well — it went beyond what I hoped for. Till now! My users love the digital experience they created.</p>
                    <span> John.Wick </span>

                    <div className='rating'>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>

                  </div>
                  <div>
                    <p>They made an amazing website that not only looks great but is also easy for my users. They mixed my ideas with their skills so
                      well — it went beyond what I hoped for. Till now! My users love the digital experience they created.</p>
                    <span> Tony.Stark  </span>

                    <div className='rating'>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>

                  </div>

                </Slider>
              </div>

            </div>
          </div>

        </div>
      </Layout>
    </>
  )
}
