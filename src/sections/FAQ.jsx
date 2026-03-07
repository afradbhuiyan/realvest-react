import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
const FAQ = () => {
    const faqs = [
        {
            id: 1,
            title: 'What is real estate investment?',
            description: 'Real estate investment involves purchasing, owning, managing, renting, or selling properties for the purpose of generating income or profit.',
        },
        {
            id: 2,
            title: 'What types of real estate investments are available?',
            description: 'Common types of real estate investments include residential properties (such as single-family homes, condos, and apartments), commercial properties (such as office buildings, retail spaces, and warehouses), industrial properties, and vacant land.',
        },
        {
            id: 3,
            title: 'What types of real estate investments are available?',
            description: 'Common types of real estate investments include residential properties (such as single-family homes, condos, and apartments), commercial properties (such as office buildings, retail spaces, and warehouses), industrial properties, and vacant land.',
        },
        {
            id: 4,
            title: 'How much money do I need to invest in real estate?',
            description: 'The amount of money needed depends on various factors, including the type of property, its location, market conditions, financing options, and your investment goals. You can invest directly or indirectly through real estate investment trusts (REITs) or crowdfunding platforms, which may require lower initial investments.',
        },
        {
            id: 5,
            title: 'How can I finance a real estate investment?',
            description: 'Financing options include traditional mortgages, private loans, hard money loans, seller financing, crowdfunding, and partnerships. The choice of financing depends on factors such as your creditworthiness, the property\'s value, and your investment strategy.',
        },
        {
            id: 6,
            title: 'How can I maximize returns on my real estate investments?',
            description: 'Strategies for maximizing returns include conducting thorough due diligence, investing in high-demand areas, maintaining properties effectively, optimizing rental income, minimizing expenses, leveraging tax advantages, and staying informed about market trends.',
        }
    ]
    return (
        <section className="faq py-120">
            <div className="container">
                <div className="section-heading style-left">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-lg-5">
                            <span className="section-heading__tagline">
                                FAQ's
                            </span>
                            <h2 className="section-heading__title">
                                Got Questions? We've Got Answers
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="section-heading__desc">
                                Everything you need to know, explained simply to help you get started with confidence.
                                Still have questions? Feel free to reach out — we’re happy to help
                            </p>
                            <Link className="btn btn--base mt-4" to="/contact">
                                <span className="btn__text">Contact Now</span>
                                <span className="btn__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right">
                                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
                                        <path d="m21 3-9 9"></path>
                                        <path d="M15 3h6v6"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row gy-4">
                    <div className="col-lg-7">
                        <Accordion className="custom--accordion" defaultActiveKey="0">
                            {faqs.map(({ id, title, description }, index) => (
                                <Accordion.Item key={id} eventKey={index.toString()}>
                                    <Accordion.Header>{`${id}. ${title}`}</Accordion.Header>
                                    <Accordion.Body>
                                        {description}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    <div className="col-lg-5">
                        <div className="faq-card">
                            <div className="faq-card__header">
                                <span className="faq-card__tagline">Newsletter</span>
                                <h4 className="faq-card__title" data-highlight-start="5" data-highlight-word="7">
                                    Never Miss Our Latest Blogs and Announcements
                                </h4>
                            </div>
                            <div className="faq-card__body">
                                <form className="faq-subscribe">
                                    <input className="faq-subscribe__input" type="text" placeholder="Enter your email here..." />
                                    <button className="btn btn--icon btn--base" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ