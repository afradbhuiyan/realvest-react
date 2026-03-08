const SocialList = ({ className = '', ...props }) => {    
    return (
        <ul className={`social-list ${className}`} {...props}>
            <li className="social-list__item">
                <a className="social-list__link" to="https://facebook.com" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://x.com" target="_blank">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://linkedin.com" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://pinterest.com" target="_blank">
                    <i className="fab fa-pinterest-p"></i>
                </a>
            </li>
        </ul>
    )
}

export default SocialList