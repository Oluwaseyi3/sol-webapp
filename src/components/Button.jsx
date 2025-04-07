import React, { useState } from 'react';

const Button = ({ type, link }) => {
    const [isHovering, setIsHovering] = useState(false);

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        fontSize: '1.125rem',
        backgroundColor: 'rgb(249, 250, 251)',
        backdropFilter: 'blur(12px)',
        fontWeight: 600,
        isolation: 'auto',
        border: '2px solid rgb(249, 250, 251)',
        zIndex: 10,
        position: 'relative',
        padding: '0.5rem 1rem',
        overflow: 'hidden',
        borderRadius: '9999px',
        color: isHovering ? 'rgb(249, 250, 251)' : 'black',
        transition: 'color 300ms'
    };

    const beforeElementStyle = {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        transition: 'all 700ms',
        left: isHovering ? '0' : '-100%',
        borderRadius: '9999px',
        backgroundColor: 'rgb(16, 185, 129)',
        zIndex: -10,
        aspectRatio: '1',
        transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        top: 0
    };

    const svgStyle = {
        width: '2rem',
        height: '2rem',
        justifyContent: 'flex-end',
        transition: 'transform 300ms linear, background-color 300ms',
        backgroundColor: isHovering ? 'rgb(249, 250, 251)' : 'transparent',
        color: 'rgb(249, 250, 251)',
        borderRadius: '9999px',
        border: isHovering ? 'none' : '1px solid rgb(55, 65, 81)',
        padding: '0.5rem',
        transform: isHovering ? 'rotate(90deg)' : 'rotate(45deg)'
    };

    const pathStyle = {
        fill: 'rgb(31, 41, 55)'
    };

    return (
        <a href={link}

            type="submit"
            style={buttonStyle}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div style={beforeElementStyle} />
            {type}
            <svg
                style={svgStyle}
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    style={pathStyle}
                />
            </svg>
        </a>
    );
};

export default Button;