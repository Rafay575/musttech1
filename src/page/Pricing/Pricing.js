import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Pricing.css';

export default function Pricing() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL


  return (
    <>
      <Layout>
        <div className='pricing'>


          <div class="pricing-section">
            <h2>PRICING</h2>
            <p>Unlock Your Potential With These Plans</p>
            <div class="pricing-cards">
              <div class="pricing-card">
                <div class="card-header">
                  <h5>Standard</h5>
                  <p class="price">$600 <span>/m</span> </p>
                </div>
                <div class="card-body">
                  <ul>
                    <li>WordPress Developer</li>
                    <li>Custom website Developer</li>
                    <li>Responsive design</li>
                    <li>Pixel Perfect</li>
                  </ul>
                  <div class="card-footer">
                    <h5>Duration</h5>
                    <p>5 working days</p>
                    <p>Time may vary according to your requirments</p>
                    <p>revision allowed(2)</p>
                    <button>BUY NOW</button>
                  </div>
                </div>
              </div>

              <div class="pricing-card">
                <div class="card-header">
                  <h5>Individual Hire</h5>
                  <p>$ 1500<span>/m</span></p>
                </div>
                <div class="card-body">
                  <ul>
                    <li>App Developer</li>
                    <li>Web Developer</li>
                    <li>Quality assurance</li>
                    <li>Project Manager</li>
                    <li>Designer</li>
                  </ul>
                  <div class="card-footer">
                    <h5>Duration</h5>
                    <p>Each request update(24-48 hrs)</p>
                    <p>Onboarding time (12-24 hrs)</p>
                    <p>Subscription(30 days)</p>
                    <p>turnaround time(depends on project)</p>
                    <button>BUY NOW</button>
                  </div>
                </div>
              </div>

              <div class="pricing-card">
                <div class="card-header">
                  <h5>Team Hire</h5>
                  <p>$4000<span>/m</span></p>
                </div>
                <div class="card-body">
                  <ul>
                    <li>App Developer</li>
                    <li>Web Developer</li>
                    <li>Quality assurance</li>
                    <li>Project Manager</li>
                    <li>Designer</li>
                  </ul>
                  <div class="card-footer">
                    <h5>Duration</h5>
                    <p>Designer(24-72 hrs/page)</p>
                    <p>Developer (1-2 day/page)</p>
                    <p>Quality assurance(24hrs/page)</p>
                    <button>BUY NOW</button>
                  </div>
                </div>
              </div>

            </div>
          </div>




        </div>
      </Layout>
    </>
  )
}
