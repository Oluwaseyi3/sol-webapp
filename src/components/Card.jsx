// components/Card.js
import React from 'react';
import styles from './Card.module.css'; // Assuming you create a Card.module.css

function Card({ title, description, second }) {
    return (
        <div className={styles.card}>
            <h3 className={styles['card-title']}>{title}</h3>
            <p className={styles['card-description']}>{description}</p>
            <p className={styles['card-second-description']}>{second}</p>
        </div>
    );
}

export default Card;