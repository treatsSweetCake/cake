import { useRef, useState } from 'react';

const Border = () => {
    const [borderWidth, setBorderWidth] = useState(1);
    const [borderStyle, setBorderStyle] = useState('solid');
    const [borderColor, setBorderColor] = useState('#000000');

    const colorRef = useRef()

    return (
        <>
            <div className="border-page">
                <div className="border-container flex space-x-7 md:flex-row sm:flex-col">
                    <div className="controls">
                        <div className="control-group">
                            <label>Border Width :</label>
                            <div className="control">
                                <input
                                    type="range"
                                    min={0}
                                    max={20}
                                    defaultValue={1}
                                    onChange={(e) => setBorderWidth(e.target.value)}
                                />
                                <span className='bg-gray-500 rounded-lg w-16 px-2 py-1'>{borderWidth}px</span>
                            </div>
                        </div>
                        <div className="control-group">
                            <label>Border Style :</label>
                            <div className="control">
                                <select
                                    value={borderStyle}
                                    onChange={(e) => setBorderStyle(e.target.value)}
                                    className='bg-gray-500 rounded-lg p-2'
                                >
                                    <option value="solid">Solid</option>
                                    <option value="dotted">Dotted</option>
                                    <option value="dashed">Dashed</option>
                                    <option value="double">Double</option>
                                    <option value="groove">Groove</option>
                                    <option value="ridge">Ridge</option>
                                    <option value="inset">Inset</option>
                                    <option value="outset">Outset</option>
                                </select>
                            </div>
                        </div>
                        <div className="control-group">
                            <label>Border Color :</label>
                            <div className="control">
                                <div className='colorOrganizer border'>
                                    <input
                                        type="color"
                                        value={borderColor}
                                        onChange={(e) => setBorderColor(e.target.value)} ref={colorRef}
                                    />
                                    <div className='w-full h-full colorFiller' style={{ background: borderColor }} onClick={() => { colorRef.current.click() }}></div>
                                </div>
                                <span className='bg-gray-500 p-1 rounded-lg w-20'>{borderColor}</span>
                            </div>
                        </div>
                    </div>
                    <div className="preview">
                        <div
                            className="border-box grid items-center place-items-center"
                            style={{
                                border: `${borderWidth}px ${borderStyle} ${borderColor}`
                            }}
                        >
                            <i className='tracking-wider reset bg-[#171F38] font-semibold hover:text-[#01D293] fas fa-rotate-left p-2 rounded-lg' onClick={() => {
                                location.reload()
                            }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Border;
