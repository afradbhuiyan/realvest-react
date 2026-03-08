const PropertyDetailsPricingCard = ({  showInvestModal }) => {
    return (
        <div className="prop-details-card" id="prop-details-pricing">
            <div className="prop-details-card__body">
                <div className="prop-details-info mb-3">
                    <p className="prop-details-info__label">
                        Per square feet amount
                    </p>
                    <h4 className="prop-details-info__price">
                        $50,000.00 USD
                    </h4>
                </div>
                <div className="invest-amount">
                    <div className="invest-amount__progress">
                        <div className="invest-amount__progress-bar" style={{ width: '50%' }}>
                        </div>
                    </div>
                    <ul className="invest-amount-meta">
                        <li className="invest-amount-meta__item">12 Square Feet</li>
                        <li className="invest-amount-meta__item">$144,000.00 (100%)</li>
                    </ul>
                </div>
            </div>
            <div className="prop-details-card__footer">
                <button className="w-100 btn btn--base" type="button" onClick={showInvestModal}>
                    Invest Now
                </button>
            </div>
        </div>
    )
}

export default PropertyDetailsPricingCard