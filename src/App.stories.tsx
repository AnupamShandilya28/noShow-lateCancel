import React from 'react';
import { App } from './App';
import Counter from './Counter';

export default {
    title: 'Your Shared UI',
};

export const CounterWithNoValue = () => {
    return <Counter />
};

export const CounterWithStartValue = () => {
    return <Counter start={10} />
};


export const CounterWithNegativeStartValue = () => {
    return <Counter start={-10} />
};
