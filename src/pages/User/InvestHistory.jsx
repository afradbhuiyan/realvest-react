import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Pagination from '../../components/Pagination';
import DropdownAction from '../../components/DropdownAction';

const InvestHistory = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <div className="card custom--card mb-4 h-100">
                <div className="card-header">
                    <h6 className="card-title">Next Installment</h6>
                </div>
                <div className="card-body">
                    <div className="table--responsive">
                        <table className="table table--custom table--responsive-sm">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Invested Amount</th>
                                    <th>Due Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Property">
                                        <a href="#">
                                            <strong>Modern Loft</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$20,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$9,800.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--primary">Running</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/iconic-victorian">
                                            <strong>Iconic Victorian</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$4,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/opaloasis-estates">
                                            <strong>OpalOasis Estates</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$50,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$8,000.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--primary">Running</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/modern-loft">
                                            <strong>Modern Loft</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$20,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$2,800.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--primary">Running</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/modern-loft">
                                            <strong>Modern Loft</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$20,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/iconic-victorian">
                                            <strong>Iconic Victorian</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$4,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/luxury-penthouse">
                                            <strong>Luxury Penthouse</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$10,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/signature-spires">
                                            <strong>Signature Spires</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$20,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/iconic-victorian">
                                            <strong>Iconic Victorian</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$4,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/signature-spires">
                                            <strong>Signature Spires</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$20,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/luxury-condominiums">
                                            <strong>Luxury Condominiums</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$12,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/infinity-gardens">
                                            <strong>Infinity Gardens</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$10,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Property">
                                        <a href="https://script.viserlab.com/realvest/property/luxury-condominiums">
                                            <strong>Luxury Condominiums</strong>
                                        </a>
                                    </td>
                                    <td data-label="Invested Amount"><strong>$12,000.00</strong>
                                    </td>
                                    <td data-label="Due Amount"><strong>$0.00</strong></td>
                                    <td data-label="Status"><span className="badge badge--success">Completed</span></td>

                                    <td data-label="Action">
                                        <DropdownAction handleShow={handleShow} />
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

            <Modal className="custom--modal" show={show} onHide={handleClose} centered>
                <Modal.Header className="justify-content-between">
                    <Modal.Title as="h6">Investment Details</Modal.Title>
                    <button className="btn btn--sm btn--close btn-soft--dark btn--icon" type="button" onClick={handleClose}>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <ul className="list-group list-group--custom">
                        <li className="list-group-item">
                            <span className="label">Property</span>
                            <span className="value">Modern Loft</span>
                        </li>
                        <li className="list-group-item">
                            <span className="label">Total Invest Amount</span>
                            <span className="value">$20000.00</span>
                        </li>
                        <li className="list-group-item">
                            <span className="label">Paid Amount</span>
                            <span className="value">$10200.00</span>
                        </li>
                        <li className="list-group-item">
                            <span className="label">Due Amount</span>
                            <span className="value">$9800.00</span>
                        </li>
                        <li className="list-group-item">
                            <span className="label">Per Installment Amount</span>
                            <span className="value">$1400.00</span>
                        </li>
                        <li className="list-group-item">
                            <span className="label">Next Installment Date</span>
                            <span className="value">2025-06-28</span>
                        </li>
                        <li className="list-group-item">
                            <span className="label">Total Profit</span>
                            <span className="value">$0.00</span>
                        </li>
                        <li className="list-group-item">
                            <span className="label">Next Profit Date</span>
                            <span className="badge badge--warning">
                                Investment Running
                            </span>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal >
        </>
    )
}

export default InvestHistory