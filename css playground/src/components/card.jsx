/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

const Card = ({ name, onWidthChange }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            const cardWidth = cardRef.current.offsetWidth;
            if (onWidthChange) {
                onWidthChange(cardWidth);
            }
        }
    }, [onWidthChange]);

    return (
        <div
            className="border rounded-3xl flex justify-center items-center bg-[#171F38] text-white transition-transform transform hover:shadow-lg hover:border-[#64FFDA] hover:bg-[#112240] p-4 card"
            ref={cardRef}
        >
            <h1 className="lg:text-4xl md:text-3xl font-bold tracking-wider">{name}</h1>
        </div>
    );
};

export default Card;
