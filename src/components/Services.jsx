import React from 'react'
import "../styles/Service.scss"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/simg1.jpeg'
import img2 from '../assets/servicesitem2.png'
import img3 from '../assets/servicesitem3.jpeg'
import img4 from '../assets/servicesitem4.png'

const Services = () => {
    return (
        <div className='services'>
            <h1 className='serivcehead'>Services</h1>
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                interval={1000}>
                <div>
                    <img src={img1} alt='srvc-1'></img>
                    <h2 className='legend'>Code Templates and Snippets</h2>
                </div>
                <div>
                    <img src={img2} alt='srvc-2'></img>
                    <h2 className='legend'>Development Tools</h2>
                </div>
                <div>
                    <img src={img3} alt='srvc-3'></img>
                    <h2 className='legend'>Community and Forums</h2>
                </div>
                <div>
                    <img src={img4} alt='srvc-4'></img>
                    <h2 className='legend'>Deployment and Hosting Solutions</h2>
                </div>

            </Carousel>
        </div>
    )
}

export default Services