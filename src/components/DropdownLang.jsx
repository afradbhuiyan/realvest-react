import Dropdown from 'react-bootstrap/Dropdown';

import IconBN from '../assets/images/icons/bn.png';
import IconES from '../assets/images/icons/es.png';
import IconFR from '../assets/images/icons/fr.png';

const DropdownLang = () => {
    return (
        <Dropdown className="dropdown--lang">
            <Dropdown.Toggle variant={null} as="button">
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none"
                        preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M1.5 8H14.5" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round"
                            strokeLinejoin="round"></path>
                        <path
                            d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z"
                            stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                            d="M10.7083 8C10.7083 12.3333 7.99996 14.5 7.99996 14.5C7.99996 14.5 5.29163 12.3333 5.29163 8C5.29163 3.66667 7.99996 1.5 7.99996 1.5C7.99996 1.5 10.7083 3.66667 10.7083 8Z"
                            stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
                <span className="text">EN</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="javascript:void(0);">
                    <img className="lang-flag" src={IconBN} alt="" />
                    <span className="lang-text">Bangla</span>
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0);">
                    <img className="lang-flag" src={IconES} alt="" />
                    <span className="lang-text">Spanish</span>
                </Dropdown.Item>
                <Dropdown.Item href="javascript:void(0);">
                    <img className="lang-flag" src={IconFR} alt="" />
                    <span className="lang-text">French</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownLang