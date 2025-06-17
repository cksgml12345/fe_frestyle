import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WorldcupPage() {
    const [items, setItems] = useState([]);
    const [round, setRound] = useState(1);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        axios.get('/api/preferences/items')
            .then(res => setItems(res.data))
            .catch(err => console.error('항목 로딩 실패:', err));
    }, []);

    const handleSelect = (item) => {
        const nextSelected = [...selected, item];

        if (nextSelected.length === items.length / 2) {
            if (nextSelected.length === 1) {
                const winner = nextSelected[0];
                alert(`최종 우승: ${winner.value}`);

                axios.post('/api/preferences', {
                    user_id: 1,
                    selections: [winner],
                });

                return;
            }

            setItems(nextSelected);
            setSelected([]);
            setRound(prev => prev + 1);
        } else {
            setSelected(nextSelected);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-xl font-bold mb-4">월드컵 - Round {round}</h2>
            <div className="grid grid-cols-2 gap-4">
                {items.map((item, idx) => (
                    <button
                        key={idx}
                        className="border p-4 hover:bg-gray-100 rounded"
                        onClick={() => handleSelect(item)}
                    >
                        {item.value}
                    </button>
                ))}
            </div>
        </div>
    );
}
