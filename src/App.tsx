import React, { useState } from 'react';
import styles from './App.module.scss';
import Counter from './Counter';

export const App = () => {
    const [count, setCount] = useState(0);
    return (
        <Counter />
    );
};
export default App;
