
import React, { useState } from 'react';
import styles from './App.module.scss';

export const Counter = ({start = 0}) => {
    const [count, setCount] = useState(start);
    return (
        <>
            <div className={styles.count} data-testid={'count'}>
                {count}
            </div>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Subtract</button>
        </>
    );
};
export default Counter;
