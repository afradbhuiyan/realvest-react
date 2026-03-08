import { Link } from 'react-router-dom';
import SocialList from '../components/SocialList';
import CopyInput from '../components/CopyInput';
import PageBanner from '../sections/PageBanner';

import BlogDetailThumb from '../assets/images/thumbs/blog-details/thumb.png'
import BlogThumb1 from '../assets/images/thumbs/blog/thumb-1.jpg'
import BlogThumb2 from '../assets/images/thumbs/blog/thumb-2.jpg'
import BlogThumb3 from '../assets/images/thumbs/blog/thumb-3.jpg'

const BlogDetails = () => {
    return (
        <>
            <PageBanner title="Blog Details" />
            <section className="blog-details py-60">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8 col-xl-9">
                            <div className="blog-details__content">
                                <div className="blog-details__content-top">
                                    <img className="blog-details__thumb" src={BlogDetailThumb} alt="" />
                                </div>
                                <div className="blog-details__content-main">
                                    <h4 className="blog-details__title">
                                        Fal.ai unveil an open-source image model trained on licensed data
                                    </h4>
                                    <span className="blog-details__date">
                                        <i className="las la-clock"></i>
                                        April 29, 2025
                                    </span>
                                    <div className="mb-5">
                                        <h6 className="mb-2">The Reactive Model of Service Centers: Addressing Issues After They
                                            Arise</h6>
                                        <div>The landscape of service center automation has undergone a remarkable
                                            transformation over the past few decades, shifting from reactive to proactive
                                            approaches. Initially, service centers operated on a reactive model, primarily
                                            addressing issues only after they arose. This method often involved responding
                                            to customer complaints and troubleshooting problems as they emerged, leading to
                                            higher levels of downtime and customer dissatisfaction. The focus was largely on
                                            fixing problems rather than preventing them, which created a cycle of continuous
                                            reaction to service issues.</div>
                                    </div>

                                    <blockquote className="mb-5"
                                        style={{ fontStyle: 'italic', textAlign: 'center', padding: '20px', background: '#333', fontSize: '18px', borderLeft: "4px solid #9bee67" }}>
                                        Aenean metus lectus at id. Morbi aliquet commodo a sodales eget. Eu justo ante nibh
                                        et a turpis, aliquam phasellus hymenaeos, imperdiet eget cras sociosqu, tincidunt aamet. Faucibus urna luctus, arcu ni
                                    </blockquote>

                                    <div className="mb-5">
                                        <h6 className="mb-2">Shifting Paradigms: The Move Toward Proactive Service Models</h6>
                                        <div>As technology advanced, the paradigm began to shift towards a more proactive
                                            approach. The rise of advanced data analytics and machine learning techniques
                                            enabled service centers to anticipate potential issues before they occurred. By
                                            analyzing historical data and recognizing patterns, service centers could now
                                            predict when equipment might fail or when a system could encounter problems.
                                            This shift not only reduced the frequency of unexpected disruptions but also
                                            improved overall operational efficiency. Predictive maintenance became a key
                                            feature of proactive service centers, allowing them to schedule maintenance
                                            activities during non-peak hours and address issues before they impacted the
                                            customer experience.</div>
                                    </div>

                                    <div className="mb-5">
                                        <h6 className="mb-2">Harnessing Data Analytics and Machine Learning for Predictive
                                            Maintenance</h6>
                                        <div>This evolution was further accelerated by the integration of artificial
                                            intelligence (AI) and automation tools. AI-driven systems can now monitor and
                                            analyze real-time data from various sources, providing insights into potential
                                            issues and suggesting preventive measures. Automation tools facilitate swift
                                            responses to identified issues, often without the need for human intervention.
                                            For instance, automated systems can initiate repairs or adjustments based on
                                            predefined parameters, ensuring that minor issues are resolved before they
                                            escalate into significant problems.</div>
                                    </div>

                                    <div className="mb-5">
                                        <h6 className="mb-2">The Role of AI and Automation in Revolutionizing Service Center
                                            Operations</h6>
                                        <div>The proactive approach not only enhances operational efficiency but also
                                            fosters a more positive customer experience. By addressing potential issues
                                            before they impact customers, service centers can ensure a higher level of
                                            service continuity and reliability. Customers benefit from fewer disruptions and
                                            a more streamlined experience, leading to increased satisfaction and loyalty.
                                        </div>
                                    </div>

                                    <div>
                                        <h6 className="mb-2">Enhancing Customer Experience Through Proactive Service Strategies
                                        </h6>
                                        <div>In essence, the evolution from a reactive to a proactive model in service
                                            center automation represents a significant leap forward. It highlights the
                                            importance of leveraging advanced technologies to not only address problems but
                                            to anticipate and prevent them, ultimately leading to a more efficient and
                                            customer-centric operation. As technology continues to evolve, service centers
                                            will likely see even more sophisticated solutions that further enhance their
                                            ability to provide seamless and proactive service.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card custom--card mt-4">
                                <div className="card-body">
                                    <h6 className="card-title mb-3 text-center">
                                        Share now
                                    </h6>
                                    <SocialList className="w-fit-content style-two mx-auto" />
                                    <div className="blog-details-divider my-3">
                                        <span className="blog-details-divider__text">Or</span>
                                    </div>
                                    <CopyInput defaultValue="https://script.viserlab.com/realvest/property/elite-horizon" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3">
                            <aside className="blog-details-sidebar">
                                <div className="blog-details-sidebar__header">
                                    <h6 className="blog-details-sidebar__title">Recent Blogs</h6>
                                </div>
                                <div className="blog-details-sidebar__body">
                                    <ul className="latest-blog">
                                        <li className="latest-blog-item">
                                            <img className="latest-blog-item__thumb" src={BlogThumb1}
                                                alt="" />
                                            <div className="latest-blog-item__content">
                                                <h6 className="latest-blog-item__title">
                                                    <Link to="/blog/1">
                                                        How to Turn One Product Image into 5 Types
                                                    </Link>
                                                </h6>
                                                <span className="latest-blog-item__date">April 29, 2025 </span>
                                            </div>
                                        </li>
                                        <li className="latest-blog-item">
                                            <img className="latest-blog-item__thumb" src={BlogThumb2}
                                                alt="" />
                                            <div className="latest-blog-item__content">
                                                <h6 className="latest-blog-item__title">
                                                    <Link to="/blog/2">
                                                        Which One Works Better for Ecommerce?
                                                    </Link>
                                                </h6>
                                                <span className="latest-blog-item__date">April 29, 2025 </span>
                                            </div>
                                        </li>
                                        <li className="latest-blog-item">
                                            <img className="latest-blog-item__thumb" src={BlogThumb3}
                                                alt="" />
                                            <div className="latest-blog-item__content">
                                                <h6 className="latest-blog-item__title">
                                                    <Link to="/blog/3">
                                                        Boost Sales on TikTok & Instagram
                                                    </Link>
                                                </h6>
                                                <span className="latest-blog-item__date">April 29, 2025 </span>
                                            </div>
                                        </li>
                                        <li className="latest-blog-item">
                                            <img className="latest-blog-item__thumb" src={BlogThumb1}
                                                alt="" />
                                            <div className="latest-blog-item__content">
                                                <h6 className="latest-blog-item__title">
                                                    <Link to="/blog/4">
                                                        How to Turn One Product Image into 5 Types
                                                    </Link>
                                                </h6>
                                                <span className="latest-blog-item__date">April 29, 2025 </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails