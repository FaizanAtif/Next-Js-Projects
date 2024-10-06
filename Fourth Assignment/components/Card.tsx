// src/components/Card.tsx
import styles from './Card.module.css';

interface CardProps {
    name: string;
    rollNo: string;
    classTime: string;
}

const Card: React.FC<CardProps> = ({ name, rollNo, classTime }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Name: {name}</h2>
            <p className={styles.cardText}>Roll No: {rollNo}</p>
            <p className={styles.cardText}>Class: {classTime}</p>
        </div>
    );
};

export default Card;
