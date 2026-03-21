

import Pagination from '../../components/Pagination';

const ProfitHistory = () => {
    return (
        <>
            <div className="card custom--card mb-4 h-100">
                <div className="card-header">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <h6 className="card-title">Profit History</h6>
                        <form className="search-form">
                            <div className="input-group input--group">
                                <input type="text" name="search" className="form-control form--control" value=""
                                    placeholder="Search ..." id="search" />
                                <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-search-icon lucide-search">
                                        <path d="m21 21-4.34-4.34" />
                                        <circle cx="11" cy="11" r="8" />
                                    </svg>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table--responsive">
                        <table className="table table--custom table--responsive-sm">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Investment Id</th>
                                    <th>TRX</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Property">Modern Loft</td>
                                    <td data-label="Investment Id">NDD71ATDOP</td>
                                    <td data-label="TRX">CT1J1QK6TQBC</td>
                                    <td data-label="Amount">$1,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-10-21 01:45 PM<br />
                                            <span className="small">3 months ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Modern Loft</td>
                                    <td data-label="Investment Id">NDD71ATDOP</td>
                                    <td data-label="TRX">HUTSC6JD94V9</td>
                                    <td data-label="Amount">$1,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-07-14 06:00 PM<br />
                                            <span className="small">6 months ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Modern Loft</td>
                                    <td data-label="Investment Id">NDD71ATDOP</td>
                                    <td data-label="TRX">BYZKBCGM2YMV</td>
                                    <td data-label="Amount">$1,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-06-14 06:00 PM<br />
                                            <span className="small">7 months ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Modern Loft</td>
                                    <td data-label="Investment Id">NDD71ATDOP</td>
                                    <td data-label="TRX">UPQWSIS9497A</td>
                                    <td data-label="Amount">$1,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-05-15 06:05 PM<br />
                                            <span className="small">8 months ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Modern Loft</td>
                                    <td data-label="Investment Id">NDD71ATDOP</td>
                                    <td data-label="TRX">TLGKYS8OUSHR</td>
                                    <td data-label="Amount">$1,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-04-15 06:05 PM<br />
                                            <span className="small">9 months ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Modern Loft</td>
                                    <td data-label="Investment Id">NDD71ATDOP</td>
                                    <td data-label="TRX">BACCIU3ZSJN5</td>
                                    <td data-label="Amount">$1,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-03-16 06:00 PM<br />
                                            <span className="small">10 months ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Luxury Penthouse</td>
                                    <td data-label="Investment Id">ZEX3PA2BMS</td>
                                    <td data-label="TRX">RP2XEFLP2RBG</td>
                                    <td data-label="Amount">$999.99</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-02-14 06:00 PM<br />
                                            <span className="small">11 months ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Modern Loft</td>
                                    <td data-label="Investment Id">NDD71ATDOP</td>
                                    <td data-label="TRX">STAYN9ZF5HQH</td>
                                    <td data-label="Amount">$1,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-02-14 06:00 PM<br />
                                            <span className="small">11 months ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Modern Loft</td>
                                    <td data-label="Investment Id">NDD71ATDOP</td>
                                    <td data-label="TRX">1OATO8ZGEKYV</td>
                                    <td data-label="Amount">$1,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2025-01-15 06:00 PM<br />
                                            <span className="small">1 year ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Signature Spires</td>
                                    <td data-label="Investment Id">Z5FWXW3K59</td>
                                    <td data-label="TRX">K6BUYY4J8NNG</td>
                                    <td data-label="Amount">$4,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2024-09-08 06:00 PM<br />
                                            <span className="small">1 year ago</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">Signature Spires</td>
                                    <td data-label="Investment Id">QKRHM5UXAR</td>
                                    <td data-label="TRX">79NEECA4UO8J</td>
                                    <td data-label="Amount">$4,000.00</td>
                                    <td data-label="Date">
                                        <div>
                                            2024-08-10 06:05 PM<br />
                                            <span className="small">1 year ago</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default ProfitHistory