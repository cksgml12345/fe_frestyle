// src/components/ChartBlock.jsx
import React from 'react';
import {
    Bar,
    Doughnut
} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export default function ChartBlock({ title, type }) {
    const sampleData = {
        labels: ['커피', '녹차', '피자', '햄버거'],
        datasets: [
            {
                label: '선호도',
                data: [25, 15, 40, 20],
                backgroundColor: ['#92CFA5', '#FFD700', '#FF6B6B', '#4D96FF'],
            },
        ],
    };

    return (
        <div className="my-6">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="bg-white border rounded p-4">
                {type === 'bar' && <Bar data={sampleData} />}
                {type === 'doughnut' && <Doughnut data={sampleData} />}
            </div>
        </div>
    );
}
