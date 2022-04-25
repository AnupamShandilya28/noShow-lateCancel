import React, { useState } from 'react';

import ApplyCharges from './components/ApplyCharges-Page/ApplyCharges';

export const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <ApplyCharges/>
            
        </>
    );
};
export default App;
