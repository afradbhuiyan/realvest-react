import { useState } from 'react'
import Thumb1 from '../assets/images/thumbs/why-invest/thumb1.png'
import Thumb2 from '../assets/images/thumbs/why-invest/thumb2.png'
import Thumb3 from '../assets/images/thumbs/why-invest/thumb3.png'
import Thumb4 from '../assets/images/thumbs/why-invest/thumb4.png'

const WhyInvest = () => {
    const [active, setActive] = useState(1);
    const data = [
        {
            id: 1,
            icon: 'las la-hand-holding-usd',
            thumb: Thumb1,
            title: 'Secure Investment',
            description: 'Rest assured with our secure investment solutions, your financial future is protected',
        },
        {
            id: 2,
            icon: 'lab la-gg-circle',
            thumb: Thumb2,
            title: 'Transparent Platform',
            description: 'Experience the confidence of a transparent platform for your peace of mind',
        },
        {
            id: 3,
            icon: 'las la-cloud-meatball',
            thumb: Thumb3,
            title: 'Passive Income',
            description: 'Explore opportunities for generating passive income streams',
        },
        {
            id: 4,
            icon: 'las la-headset',
            thumb: Thumb4,
            title: 'Support',
            description: 'Count on our dedicated support team for prompt and reliable assistance',
        }
    ]

    return (
        <section className="why-invest py-120">
            <div className="container">
                <div className="section-heading style-left">
                    <div className="row gy-4 align-items-end justify-content-between">
                        <div className="col-lg-5">
                            <span className="section-heading__tagline">
                                Built for smarter investing
                            </span>
                            <h2 className="section-heading__title">
                                Why Invest in Real Estate?
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="section-heading__desc">
                                Real estate offers long-term stability and consistent growth. Built to help smart investors
                                invest smarter, our platform provides secure opportunities, insights, and the tools you need to
                                invest.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="row gy-4 gy-lg-0 align-items-end">
                    <div className="col-xl-4">
                        <div className="row gy-4 gy-xl-0">
                            {data.map((item) => (
                                <div key={item.id} className="col-xsm-6 col-sm-6 col-xl-12" >
                                    <div className={`why-invest-content ${item.id === active ? 'active' : ''}`} id={`why-invest-content-${item.id}`}>
                                        <div className="why-invest-content__thumb d-xl-none">
                                            <img src={item.thumb} alt="" />
                                            <div className="why-invest-content__thumb-content">
                                                <div className="why-invest-content__thumb-num">{`0${item.id}`}</div>
                                                <h6 className="why-invest-content__thumb-title">{item.title}</h6>
                                            </div>
                                        </div>
                                        <div className="why-invest-content__icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <h6 className="why-invest-content__title">
                                            {item.title}
                                        </h6>
                                        <p className="why-invest-content__desc">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-8 d-none d-xl-block">
                        <ul className="why-invest-tab">
                            {data.map((item) => (
                                <li onMouseEnter={() => setActive(item.id)} key={item.id} className={`why-invest-tab-item ${active === item.id ? 'active' : ''}`} data-content={`#why-invest-content-${item.id}`}>
                                    <div className="why-invest-tab-item-thumb">
                                        <img src={item.thumb} alt="" />
                                        <div className="why-invest-tab-item-thumb__content">
                                            <div className="why-invest-tab-item-thumb__num">{`0${item.id}`}</div>
                                            <h6 className="why-invest-tab-item-thumb__title">Secure Investment</h6>
                                        </div>
                                    </div>
                                    <div className="why-invest-tab-item-toggle">
                                        <div className="why-invest-tab-item-toggle__arrow">
                                            <i className="las la-arrow-left"></i>
                                        </div>
                                        <p className="why-invest-tab-item-toggle__title">
                                            Secure Investment
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WhyInvest