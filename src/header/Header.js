import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [characters, setCharacters] = useState([
        { id: 0, text: 'home', color: '#2D61E7', isSelected: true },
        { id: 1, text: 'profile', color: 'black', isSelected: false },
        { id: 2, text: 'skills', color: 'black', isSelected: false },
        { id: 3, text: 'project', color: 'black', isSelected: false },
        { id: 4, text: 'about', color: 'black', isSelected: false },
    ]);

    const scrollPositions = [
        25, // home
        1000, // profile
        1850, // skills
        2680, // project
        3700 // about
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const currentSectionIndex = scrollPositions.findIndex(position => scrollPosition < position);
            const updatedCharacters = characters.map((char, index) => ({
                ...char,
                color: index === currentSectionIndex ? '#2D61E7' : 'black',
                isSelected: index === currentSectionIndex,
            }));
            setCharacters(updatedCharacters);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [characters, scrollPositions]);

    return (
        <div className="Header">
            <div className="Header_wrap">
                <div className="Header_logo">
                    <p>minji's portfolio</p>
                </div>
                <div className='header_skill'>
                    {characters.map(char => (
                        <Character key={char.id} char={char} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Character = ({ char }) => {
    return (
        <div
            className="character"
            id={`section-${char.id}`}
            style={{
                cursor: 'pointer',
                color: char.color,
                borderBottom: char.isSelected ? '#2D61E7 solid 4px' : 'none',
            }}
        >
            {char.text}
        </div>
    );
};

export default Header;
