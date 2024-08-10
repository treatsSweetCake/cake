import { useRef, useState } from 'react';

const Gradient = () => {
    const [color1, setColor1] = useState('#ff0000');
    const [color2, setColor2] = useState('#0000ff');
    const [angle, setAngle] = useState(90);

    const colorRef = useRef()
    const colorRef2 = useRef()

    return (
        <>
            <div className="gradient-page">
                <div className="gradient-container flex space-x-7 md:flex-row sm:flex-col">
                    <div className="controls">
                        <div className="control-group">
                            <label>First Color :</label>
                            <div className="control">
                                <div className='colorOrganizer border'>
                                    <input
                                        type="color"
                                        value={color1}
                                        onChange={(e) => setColor1(e.target.value)}
                                        ref={colorRef}
                                    />
                                    <div className='w-full h-full colorFiller' style={{ background: color1 }} onClick={() => { colorRef.current.click() }}></div>
                                </div>
                                <span className='bg-gray-500 p-1 rounded-lg w-20'>{color1}</span>
                            </div>
                        </div>
                        <div className="control-group">
                            <label>Second Color :</label>
                            <div className="control">
                                <div className='colorOrganizer border'>
                                    <input
                                        type="color"
                                        value={color2}
                                        onChange={(e) => setColor2(e.target.value)}
                                        ref={colorRef2}
                                    />
                                    <div className='w-full h-full colorFiller' style={{ background: color2 }} onClick={() => { colorRef2.current.click() }}></div>
                                </div>
                                <span className='bg-gray-500 p-1 rounded-lg w-20'>{color2}</span>
                            </div>
                        </div>
                        <div className="control-group">
                            <label>Angle :</label>
                            <div className="control">
                                <input
                                    type="range"
                                    min={0}
                                    max={360}
                                    value={angle}
                                    onChange={(e) => setAngle(e.target.value)}
                                />
                                <span className='bg-gray-500 rounded-lg w-16 px-2 py-1'>{angle}°</span>
                            </div>
                        </div>
                    </div>
                    <div className="preview">
                        <div
                            className="gradient-box"
                            style={{
                                background: `linear-gradient(${angle}deg, ${color1}, ${color2})`
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gradient;
