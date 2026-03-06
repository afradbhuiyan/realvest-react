import { useEffect, useRef } from 'react';
import Odometer from 'odometer';

const Counter = ({ value }) => {
    const odometerRef = useRef(null);
    const instance = useRef(null);

    useEffect(() => {
        instance.current = new Odometer({
            el: odometerRef.current,
            value: 0,
            format: '(,ddd)',
            duration: 2000,
        });

        return () => {
            instance.current = null;
        };
    }, []);

    useEffect(() => {
        if (instance.current) {
            instance.current.update(value);
        }
    }, [value]);

    return <div ref={odometerRef} className="odometer"></div>;
};

export default Counter;