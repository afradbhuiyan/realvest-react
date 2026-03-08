import { useRef, useState, useEffect, cloneElement } from "react";

const ToggleEl = ({ height = 0, children }) => {

    const targetRef = useRef(null);

    const [expanded, setExpanded] = useState(false);
    const [overflow, setOverflow] = useState(false);

    useEffect(() => {
        const el = targetRef.current;

        if (el) {
            const isOverflowing = el.scrollHeight > height;
            setOverflow(isOverflowing);
        }
    }, [height]);

    const toggle = () => {
        setExpanded(prev => !prev);
    };

    const childWithProps = cloneElement(children, {
        ref: targetRef,
        className: `${children.props.className || ""} toggle-el__target`,
        style: {
            ...children.props.style,
            height: expanded ? targetRef.current?.scrollHeight : height,
            overflow: "hidden",
            transition: "height 0.3s",
        },
    });

    return (
        <div className={`toggle-el ${expanded ? "show" : ""}`}>
            {childWithProps}

            {overflow && (
                <button className="toggle-el__btn" onClick={toggle}>
                    {expanded ? "See Less" : "See More"}
                </button>
            )}
        </div>
    );
};

export default ToggleEl;