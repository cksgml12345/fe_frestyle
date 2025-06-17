import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OptionCard from '../components/OptionCard';

const sampleRounds = [
    [
        { label: '커피', image: '/images/coffee.jpg' },
        { label: '녹차', image: '/images/greentea.jpg' },
    ],
    [
        { label: '피자', image: '/images/pizza.jpg' },
        { label: '햄버거', image: '/images/burger.jpg' },
    ],
];

export default function WorldcupPage() {
    const navigate = useNavigate();
    const [roundIndex, setRoundIndex] = useState(0);
    const [selected, setSelected] = useState([]);

    const handleSelect = (choice) => {
        setSelected([...selected, choice]);
        if (roundIndex + 1 < sampleRounds.length) {
            setRoundIndex(roundIndex + 1);
        } else {
            navigate('/result', { state: { result: [...selected, choice] } });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
            <h2 className="text-xl font-semibold mb-4">Round {roundIndex + 1}</h2>
            <div className="flex gap-6">
                {sampleRounds[roundIndex].map((option, i) => (
                    <OptionCard
                        key={i}
                        label={option.label}
                        image={option.image}
                        onClick={() => handleSelect(option.label)}
                    />
                ))}
            </div>
        </div>
    );
}