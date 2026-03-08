import { useRef, useState } from "react";

const CopyInput = ({ defaultValue = '' }) => {
    const copyInputField = useRef(null);
    const [copyBtnIcon, setCopyBtnIcon] = useState("las la-copy");

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(copyInputField.current.value);

            setCopyBtnIcon("las la-check");

            setTimeout(() => {
                setCopyBtnIcon("las la-copy");
            }, 1000);
        } catch (err) {
            console.error("Copy failed:", err);
            setCopyBtnText("Failed");
        }
    };

    return (
        <div className="input-group input--group input--group-copy">
            <input
                ref={copyInputField}
                className="form-control form--control"
                type="text"
                defaultValue={defaultValue}
                readOnly
            />
            <button onClick={handleCopyClick} className="btn btn--sm btn--icon btn--base" type="button">
                <i className={copyBtnIcon}></i>
            </button>
        </div>
    );
}

export default CopyInput;
