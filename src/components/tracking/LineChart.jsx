import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicArea({ x, y }) {
    console.log(x);
    return (
        <LineChart
            xAxis={[{ data: x }]}
            series={[{ curve: 'linear', data: y }]}
            width={500}
            height={300}
        />
    );
}
