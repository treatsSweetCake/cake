import { useState } from 'react';

const RgbToHex = () => {
    const [mode, setMode] = useState('rgbToHex');
    const [rgb, setRgb] = useState('');
    const [hex, setHex] = useState('');

    const rgbToHex = (rgb) => {
        const regex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
        const result = regex.exec(rgb);
        if (result) {
            const r = parseInt(result[1]);
            const g = parseInt(result[2]);
            const b = parseInt(result[3]);

            if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
                return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
            }
        }
        return null;
    };

    const hexToRgb = (hex) => {
        const regex = /^#?([a-fA-F0-9]{6})$/;
        const result = regex.exec(hex);
        if (result) {
            const r = parseInt(result[1].substring(0, 2), 16);
            const g = parseInt(result[1].substring(2, 4), 16);
            const b = parseInt(result[1].substring(4, 6), 16);
            return `rgb(${r}, ${g}, ${b})`;
        }
        return null;
    };

    const handleConvert = () => {
        if (mode === 'rgbToHex') {
            const hexColor = rgbToHex(rgb);
            setHex(hexColor || 'Invalid RGB format');
        } else {
            const rgbColor = hexToRgb(hex);
            setRgb(rgbColor || 'Invalid Hex format');
        }
    };

    const handleSwap = () => {
        setMode(mode === 'rgbToHex' ? 'hexToRgb' : 'rgbToHex');
        setRgb('');
        setHex('');
    };

    return (
        <div className="converter-page flex justify-center items-center">
            <div className="converter-card bg-[#171F38] p-8 rounded-lg shadow-lg max-w-md w-full text-white">
                <h1 className="text-2xl font-semibold mb-4 text-center">
                    {mode === 'rgbToHex' ? 'RGB to Hex Converter' : 'Hex to RGB Converter'}
                </h1>

                {mode === 'rgbToHex' ? (
                    <div className="input-group mb-4">
                        <label htmlFor="rgb" className="block mb-2">Enter RGB Code:</label>
                        <input
                            type="text"
                            value={rgb}
                            placeholder="e.g., rgb(255, 0, 0)"
                            onChange={(e) => setRgb(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                ) : (
                    <div className="input-group mb-4">
                        <label htmlFor="hex" className="block mb-2">Enter Hex Code:</label>
                        <input
                            type="text"
                            value={hex}
                            placeholder="e.g., #FF0000"
                            onChange={(e) => setHex(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                )}

                <div className="flex justify-center mb-4">
                    <button
                        className="swap-button p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                        onClick={handleSwap}
                        title="Swap"
                    >
                        <i className='fas fa-exchange-alt'></i>
                    </button>
                </div>

                <button
                    className="convert-button w-full text-white py-2 rounded-lg transition-all"
                    onClick={handleConvert}
                >
                    Convert
                </button>

                {hex && mode === 'rgbToHex' && (
                    <div className="output mt-4">
                        <h2 className="text-xl font-semibold">Hex Color:</h2>
                        <div className="hex-code bg-gray-700 p-2 rounded-lg mt-2">{hex}</div>
                    </div>
                )}

                {rgb && mode === 'hexToRgb' && (
                    <div className="output mt-4">
                        <h2 className="text-xl font-semibold ">RGB Color:</h2>
                        <div className="rgb-code bg-gray-700 p-2 rounded-lg mt-2">{rgb}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RgbToHex;
