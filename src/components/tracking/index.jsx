import React from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import data from './Data';

import LineChart from './LineChart';

Chart.register(CategoryScale);

export default function App() {
    return (
        <div className="App">
            <LineChart chartData={data} />
        </div>
    );
}
