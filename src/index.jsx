import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import zipFile from './assets/basic_react_app.zip';
import { Test } from './Test';

const App = () => {
    const options = [
        { text: 'Next.js', link: 'https://nextjs.org/docs' },
        { text: 'Vite', link: 'https://vitejs.dev/' },
    ];

    return (
        <div className="app">
            <Test />
            <h1 className="heading">Basic React app with webpack</h1>
            <main className="main-content">
                <p>
                    <a href={zipFile} className="slogan">
                        As an alternative to the well known <b>npx create-react-app</b> command
                    </a>
                </p>

                <em className="explanation">This command is no longer maintained</em>
                <br />
                <tt className="alternatives">Other alternatives are: </tt>
                <ul className="list">
                    {options.map((option, index) => (
                        <li key={index}>
                            <a href={option.link} target="_blank" rel="noreferrer">
                                {option.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

createRoot(document.getElementById('root')).render(<App />);
