import React from 'react';

const Card = ({ title, description, second }) => {
    return (
        <div
            style={{
                width: '200px',
                minHeight: '200px',
                borderRadius: '8px',
                textAlign: 'left',
                border: '2px solid #10B981', // green-500
                padding: '1rem 1rem 2.5rem', // 4px padding, 10px vertical padding
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h2
                style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem', // space before description
                }}
            >
                {title}
            </h2>
            <p
                style={{
                    marginTop: '0.5rem', // space between title and description
                    fontSize: '0.875rem',
                }}
            >
                {description}{second}
            </p>
        </div>
    );
};

export default Card;
