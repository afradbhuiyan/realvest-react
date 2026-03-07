const TestimonialCard = ({ thumb, description, user }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-card__header">
                <div className="testimonial-card-user">
                    <img className="testimonial-card-user__thumb" src={thumb} alt="" />
                    <div className="testimonial-card-user__content">
                        <p className="testimonial-card-user__name">{user.name}</p>
                        <span className="testimonial-card-user__position">{user.designation}</span>
                    </div>
                </div>
            </div>
            <div className="testimonial-card__body">
                <div className="testimonial-card__body-top">
                    <div className="rating-list">
                        <i className="las la-star"></i>
                        <i className="las la-star"></i>
                        <i className="las la-star"></i>
                        <i className="las la-star"></i>
                        <i className="lar la-star"></i>
                    </div>
                    <span className="testimonial-card__location">
                        Los Angeles, USA
                    </span>
                </div>
                <div className="testimonial-card__body-bottom">
                    <p className="testimonial-card__desc">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard