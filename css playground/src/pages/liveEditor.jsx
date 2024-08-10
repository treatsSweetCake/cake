import { Editor } from '@monaco-editor/react';
import { useEffect, useState } from 'react';

const LiveEditor = () => {
    const [css, setCss] = useState(``);
    const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Playground</title>
  <style>
    ${css}
  </style>
</head>

<body>
  <div id="root">Hello, CSS Playground!</div>
</body>

</html>`);

    const [isHtml, setIsHtml] = useState(true);
    const [output, setOutput] = useState('');

    useEffect(() => {
        const updatedHtml = `<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Playground</title>
  <style>
    ${css}
  </style>
</head>

<body>
  <div id="root">Hello, CSS Playground!</div>
</body>

</html>`;
        setOutput(isHtml ? html : updatedHtml);
    }, [html, css, isHtml]);

    return (
        <div className="live-editor-container flex flex-col lg:flex-row w-screen bg-[#1e1e1e] overflow-hidden">
            <div className="editor-section flex-1 flex flex-col border-r border-gray-700">
                <div className="tab-container flex bg-gray-800 text-white mb-2">
                    <button
                        onClick={() => setIsHtml(true)}
                        className={`tab-button flex-1 p-2 bg-[#1e1e1e] ${isHtml ? 'bg-blue-500' : ''}`}
                    >
                        HTML
                    </button>
                    <button
                        onClick={() => setIsHtml(false)}
                        className={`tab-button flex-1 p-2 bg-[#1e1e1e] ${!isHtml ? 'bg-blue-500' : ''}`}
                    >
                        CSS
                    </button>
                </div>
                {isHtml ? (
                    <Editor
                        theme='vs-dark'
                        language='html'
                        value={html}
                        onChange={(value) => setHtml(value || '')}
                        className="editor flex-1"
                    />
                ) : (
                    <Editor
                        theme='vs-dark'
                        language='css'
                        value={css}
                        onChange={(value) => setCss(value || '')}
                        className="editor flex-1"
                    />
                )}
            </div>
            <div className="output-section flex-1 bg-gray-100">
                <iframe
                    srcDoc={output}
                    sandbox="allow-scripts"
                    className='w-full h-full border-none'
                />
            </div>
        </div>
    );
};

export default LiveEditor;
