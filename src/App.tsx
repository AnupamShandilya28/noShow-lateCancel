import React, { useState } from 'react';
import styles from './App.module.scss';
import MemberDetails from './components/MemberDetails/MemberDetails';

export const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <MemberDetails />
        </>
    );
};
export default App;
