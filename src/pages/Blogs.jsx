import { Link } from 'react-router-dom';
import Thumb1 from '../assets/images/thumbs/blog/thumb-1.jpg';
import Thumb2 from '../assets/images/thumbs/blog/thumb-2.jpg';
import Thumb3 from '../assets/images/thumbs/blog/thumb-3.jpg';
import PageBanner from '../sections/PageBanner';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
    const blogs = [
        { id: 1, thumb: Thumb1, title: 'AI tools for business strategy that ship tomorrow', },
        { id: 2, thumb: Thumb2, title: 'AI strategy for business leaders who hate AI', },
        { id: 3, thumb: Thumb3, title: 'How can I use AI to automate repetitive tasks my team hates', },
    ]
    return (
        <>
            <PageBanner title="Blogs" />
            <section className="blog py-120">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title">
                            Smart Reads for Smart Minds
                        </h2>
                        <p className="section-heading__desc">
                            Stay informed with the latest insights, trends, and updates in AI, crypto, and digital
                            innovation — all in one place.
                        </p>
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
        </>
    )
}

export default Blogs