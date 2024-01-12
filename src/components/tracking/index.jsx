import React from 'react';
import LineChart from './LineChart';
import './index.css';

export default function App({ name, x, y }) {
    return (
        <div className="tracking">
            <LineChart x={x} y={y} />
            <h3>{name}</h3>
        </div>
    );
}
