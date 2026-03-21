import Dropdown from 'react-bootstrap/Dropdown';

const DropdownAction = ({ handleShow }) => {
    return (
        <>
            <Dropdown className="dropdown--action">
                <Dropdown.Toggle bsPrefix="btn" className="btn--icon btn--sm btn-soft--base" variant={null} as="button"  >
                    <i className="fa fa-ellipsis-v"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-end">
                    <Dropdown.Item className="dropdown-item" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-file-text-icon lucide-file-text">
                            <path
                                d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                            <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                        </svg>
                        Invoice
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-download-icon lucide-download">
                            <path d="M12 15V3" />
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <path d="m7 10 5 5 5-5" />
                        </svg>
                        Download
                    </Dropdown.Item>
                    <Dropdown.Item
                        className="dropdown-item"
                        href="javascript:void(0)"
                        onClick={(e) => {
                            e.preventDefault();
                            handleShow(true)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-eye-icon lucide-eye">
                            <path
                                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        Detail
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </>
    )
}

export default DropdownAction;