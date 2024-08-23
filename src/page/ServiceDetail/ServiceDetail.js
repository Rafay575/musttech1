import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './ServiceDetail.css';
import { useParams } from 'react-router-dom';

export default function ServiceDetail() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL
  const serviceRoute = ASSET_PATHS.SERVICE_URL

  const { id } = useParams();

  const serviceData = [
    {
      id: 3, image: 's1', heading: "Web Development",
      para: "We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. We spend our time and energies like a pro to develop and implement modern solutions for blue-chip corporate clients, fresh-faced start-ups or local SMEs. Our expertise lies in PHP, .Net, WordPress, Magento, JavaScript, AJAX, JQuery, React, Mongo DB, Agular.JS, Node.js, and Ruby on Rails to name a few."
    },
    {
      id: 1, image: 's2', heading: "Digital Marketing",
      para: "We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. We spend our time and energies like a pro to develop and implement modern solutions for blue-chip corporate clients, fresh-faced start-ups or local SMEs. Our expertise lies in PHP, .Net, WordPress, Magento, JavaScript, AJAX, JQuery, React, Mongo DB, Agular.JS, Node.js, and Ruby on Rails to name a few."
    },
    {
      id: 6, image: 's3', heading: "UI/UX DESIGN",
      para: "We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. We spend our time and energies like a pro to develop and implement modern solutions for blue-chip corporate clients, fresh-faced start-ups or local SMEs. Our expertise lies in PHP, .Net, WordPress, Magento, JavaScript, AJAX, JQuery, React, Mongo DB, Agular.JS, Node.js, and Ruby on Rails to name a few."
    },
    {
      id: 2, image: 's4', heading: "Graphic Designing",
      para: "We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. We spend our time and energies like a pro to develop and implement modern solutions for blue-chip corporate clients, fresh-faced start-ups or local SMEs. Our expertise lies in PHP, .Net, WordPress, Magento, JavaScript, AJAX, JQuery, React, Mongo DB, Agular.JS, Node.js, and Ruby on Rails to name a few."
    },
    {
      id: 4, image: 's5', heading: "App Development",
      para: "We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. We spend our time and energies like a pro to develop and implement modern solutions for blue-chip corporate clients, fresh-faced start-ups or local SMEs. Our expertise lies in PHP, .Net, WordPress, Magento, JavaScript, AJAX, JQuery, React, Mongo DB, Agular.JS, Node.js, and Ruby on Rails to name a few."
    },
    {
      id: 7, image: 's6', heading: "Blockchain Development",
      para: "We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. We spend our time and energies like a pro to develop and implement modern solutions for blue-chip corporate clients, fresh-faced start-ups or local SMEs. Our expertise lies in PHP, .Net, WordPress, Magento, JavaScript, AJAX, JQuery, React, Mongo DB, Agular.JS, Node.js, and Ruby on Rails to name a few."
    },
    {
      id: 5, image: 's7', heading: "CRM Software",
      para: "We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. We spend our time and energies like a pro to develop and implement modern solutions for blue-chip corporate clients, fresh-faced start-ups or local SMEs. Our expertise lies in PHP, .Net, WordPress, Magento, JavaScript, AJAX, JQuery, React, Mongo DB, Agular.JS, Node.js, and Ruby on Rails to name a few."
    }
  ]

  // Find the service data that matches the param id
  const service = serviceData.find(service => service.id === parseInt(id));

  console.log(service);


  if (!service) {
    return <p>Service not found</p>;
  }


  return (
    <>
      <Layout>

        <div className='service-detail'>

          <div className='img-part'>

          <img src={`${serviceRoute}/${service.image}.png`} alt={service.heading} />

          </div>

          <div className='contact-part'>
            <h2>{service.heading}</h2>
            <p>
            {service.para}
            </p>
          </div>



          <div className='tech-logo'>
            <div className='logos'>
              <div className='box'>
                <img src={`${serviceRoute}/si1.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si2.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si3.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si4.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si5.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si6.svg`} alt="image is not found" />
              </div>
            </div>

            <div className='logos'>
              <div className='box'>
                <img src={`${serviceRoute}/si7.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si8.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si9.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si10.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si11.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si12.svg`} alt="image is not found" />
              </div>
            </div>
          </div>

          <div className='tech-logo-sm'>
            <div className='logos'>
              <div className='box'>
                <img src={`${serviceRoute}/si1.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si2.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si3.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si4.svg`} alt="image is not found" />
              </div>
            </div>

            <div className='logos'>
              <div className='box'>
                <img src={`${serviceRoute}/si5.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si6.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si7.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si8.svg`} alt="image is not found" />
              </div>
            </div>


            <div className='logos'>

              <div className='box'>
                <img src={`${serviceRoute}/si9.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si10.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si11.svg`} alt="image is not found" />
              </div>
              <div className='box'>
                <img src={`${serviceRoute}/si12.svg`} alt="image is not found" />
              </div>
            </div>

          </div>


        </div>

      </Layout>
    </>
  )
}
