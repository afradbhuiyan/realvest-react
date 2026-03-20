const NoDataFound = ({ title, descripton }) => {
    const _title = title || 'No Data Found';
    const _descripton = descripton || 'We are unable to find any data';

    return (
        <div className="no-data">
            <div className="no-data__content">
                <h6 className="no-data__title">{_title}</h6>
                <p className="no-data__desc">{_descripton}</p>
            </div>
        </div>
    )
}

export default NoDataFound