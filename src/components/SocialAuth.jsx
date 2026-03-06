import React from 'react'
import googleIcon from '../assets/images/icons/google.png'
import facebookIcon from '../assets/images/icons/facebook.png'
import linkedinIcon from '../assets/images/icons/linkedin.png'

const SocialAuth = () => {
    return (
        <div className="social-auth">
            <a className="social-auth__btn" href="#">
                <img src={googleIcon} alt="" />
                <span className="text">Google</span>
            </a>
            <a className="social-auth__btn" href="#">
                <img src={facebookIcon} alt="" />
                <span className="text">Facebook</span>
            </a>
            <a className="social-auth__btn" href="#">
                <img src={linkedinIcon} alt="" />
                <span className="text">Linkedin</span>
            </a>
        </div>
    )
}

export default SocialAuth