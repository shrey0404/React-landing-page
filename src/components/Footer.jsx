import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

import "../styles/Footer.scss"

const Footer = () => {
    return (
        <div className="l-footer">
            <div className="l-top">
                <div>
                    <h1>Starter</h1>
                    <p>Development made smarter</p>
                </div>
                <div className='icons-set'>
                    <a href="/">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                </div>
            </div>

            <div className="l-bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer