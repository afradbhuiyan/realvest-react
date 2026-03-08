import { Link } from 'react-router-dom';
import Thumb1 from '../assets/images/thumbs/blog/thumb-1.jpg';
import Thumb2 from '../assets/images/thumbs/blog/thumb-2.jpg';
import Thumb3 from '../assets/images/thumbs/blog/thumb-3.jpg';
import BlogCard from '../components/BlogCard';

const Blog = () => {

    const blogs = [
        { id: 1, thumb: Thumb1, title: 'AI tools for business strategy that ship tomorrow', },
        { id: 2, thumb: Thumb2, title: 'AI strategy for business leaders who hate AI', },
        { id: 3, thumb: Thumb3, title: 'How can I use AI to automate repetitive tasks my team hates', },
    ]

    return (
        <section className="blog py-120">
            <div className="container">
                <div className="section-heading style-left">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-lg-5">
                            <span className="section-heading__tagline">
                                Our blogs
                            </span>
                            <h2 className="section-heading__title">
                                Latest News & Articles
                            </h2>
                        </div>
                        <div className="col-lg-5">
                            <p className="section-heading__desc">
                                Stay up to date with the latest news, insights, and expert articles covering trends, updates,
                                and opportunities that matter.
                            </p>
                            <Link className="btn btn--base mt-4" to="/blogs">
                                <span className="btn__text">Explore More</span>
                                <span className="btn__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    {blogs.map(({ id, thumb, title }) => (
                        <div key={id} className="col-sm-6 col-lg-4">
                            <BlogCard id={id} thumb={thumb} title={title} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog