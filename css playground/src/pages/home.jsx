import Card from "../components/card";
import '../App.css';
import { useCallback, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    const cardContainer = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);

    const handleWheel = (e) => {
        cardContainer.current.scrollLeft += e.deltaY;
    };

    const handleScrollBack = useCallback(() => {
        cardContainer.current.style.scrollBehavior = 'smooth';
        cardContainer.current.scrollLeft -= (cardWidth + 20);
    }, [cardWidth]);

    const handleScrollNext = useCallback(() => {
        cardContainer.current.style.scrollBehavior = 'smooth';
        cardContainer.current.scrollLeft += (cardWidth + 20);
    }, [cardWidth]);

    const handleCardWidthChange = useCallback((width) => {
        setCardWidth(width);
        console.log("Card width:", width);
    }, [setCardWidth]);

    return (
        <div className="w-screen h-screen flex flex-col justify-evenly items-center relative">
            <div className="flex flex-col justify-center space-y-1 items-center relative">
                <div className="absolute top-0 left-5 w-24 h-24 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full opacity-50 animate-ping"></div>
                <div className="absolute top-20 right-10 w-16 h-16 bg-[#01D293] rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-32 w-20 h-20 bg-gradient-to-r from-yellow-500 via-pink-500 to-red-600 rounded-full opacity-60 animate-bounce"></div>

                <h1 className="bg-[#171F38] text-4xl lg:text-5xl p-5 rounded-full font-bold tracking-wide first-letter:text-[#01D293] z-10">
                    CSS Playground
                </h1>
                <h1 className="text-2xl font-semibold z-10">
                    Preview your <span className="text-[#01D293] underline-custom">css</span> live
                </h1>
            </div>

            <div className='slide-container w-3/4 h-44 flex justify-evenly place-items-center'>
                <i className="fas fa-angle-left fa-angle px-2 py-1 bg-[#1a1a1a] hover:border-[#646cff] transition-all rounded-lg" onClick={handleScrollBack}></i>

                <div className="card-container w-3/4 h-full" ref={cardContainer} onWheel={handleWheel}>
                    <NavLink to='/box-shadow' className='card bg-transparent'>
                        <Card name='Box-Shadow' onWidthChange={handleCardWidthChange} />
                    </NavLink>
                    <NavLink to='/border' className='card bg-transparent'>
                        <Card name='Border' onWidthChange={handleCardWidthChange} />
                    </NavLink>
                    <NavLink to='/gradient' className='card bg-transparent'>
                        <Card name='Gradient' onWidthChange={handleCardWidthChange} />
                    </NavLink>
                </div>

                <i className="fas fa-angle-right fa-angle px-2 py-1 bg-[#1a1a1a] hover:border-[#646cff] transition-all rounded-lg" onClick={handleScrollNext}></i>
            </div>

            <div className="absolute bottom-14 flex justify-center items-center space-x-3">
                <div className="w-4 h-4 bg-[#01D293] rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};

export default Home;