import { useRef, useState } from 'react';

const BoxShadow = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [blur, setBlur] = useState(0);
    const [spread, setSpread] = useState(0);
    const [color, setColor] = useState('#000000');

    const colorRef = useRef();

    return (
        <div className="box-shadow-page p-6">
            <div className="box-shadow-container flex flex-col md:flex-row md:space-x-7">
                <div className="controls space-y-4">
                    {/* Horizontal Offset Control */}
                    <div className="control-group">
                        <label className="block font-semibold">Horizontal Offset :</label>
                        <div className="control flex items-center space-x-4">
                            <input
                                type="range"
                                min={-100}
                                max={100}
                                value={x}
                                onChange={(e) => setX(e.target.value)}
                                className="w-full"
                            />
                            <span className="bg-gray-500 text-white rounded-lg px-2 py-1">{x}px</span>
                        </div>
                    </div>

                    {/* Vertical Offset Control */}
                    <div className="control-group">
                        <label className="block font-semibold">Vertical Offset :</label>
                        <div className="control flex items-center space-x-4">
                            <input
                                type="range"
                                min={-100}
                                max={100}
                                value={y}
                                onChange={(e) => setY(e.target.value)}
                                className="w-full"
                            />
                            <span className="bg-gray-500 text-white rounded-lg px-2 py-1">{y}px</span>
                        </div>
                    </div>

                    {/* Blur Radius Control */}
                    <div className="control-group">
                        <label className="block font-semibold">Blur Radius :</label>
                        <div className="control flex items-center space-x-4">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={blur}
                                onChange={(e) => setBlur(e.target.value)}
                                className="w-full"
                            />
                            <span className="bg-gray-500 text-white rounded-lg px-2 py-1">{blur}px</span>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="block font-semibold">Spread Radius :</label>
                        <div className="control flex items-center space-x-4">
                            <input
                                type="range"
                                min={-100}
                                max={100}
                                value={spread}
                                onChange={(e) => setSpread(e.target.value)}
                                className="w-full"
                            />
                            <span className="bg-gray-500 text-white rounded-lg px-2 py-1">{spread}px</span>
                        </div>
                    </div>

                    {/* Shadow Color Control */}
                    <div className="control-group">
                        <label className="block font-semibold">Shadow Color :</label>
                        <div className="control flex items-center space-x-4">
                            <div className="colorOrganizer border rounded-lg">
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    ref={colorRef}
                                />
                                <div
                                    className="w-10 h-10 cursor-pointer colorFiller"
                                    style={{ background: color }}
                                    onClick={() => colorRef.current.click()}
                                ></div>
                            </div>
                            <span className="bg-gray-500 text-white rounded-lg px-2 py-1">{color}</span>
                        </div>
                    </div>
                </div>

                <div className="preview flex justify-center items-center mt-6 md:mt-0">
                    <div
                        className="shadow-box w-64 h-64 grid place-items-center"
                        style={{
                            boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color}`,
                            backgroundColor: '#fff',
                        }}
                    >
                        <i
                            className="tracking-wider reset bg-[#171F38] text-white font-semibold hover:text-[#01D293] fas fa-rotate-left p-2 rounded-lg cursor-pointer"
                            onClick={() => {
                                location.reload()
                            }}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxShadow;
