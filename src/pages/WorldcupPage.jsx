import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function WorldcupPage() {
    const { category } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [roundItems, setRoundItems] = useState([]);
    const [nextRound, setNextRound] = useState([]);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        axios.get(`/api/items/${category}`).then(res => {
            setItems(res.data);
            setRoundItems(res.data.slice(0, 2));
        });
    }, [category]);

    const handleSelect = (selected) => {
        setNextRound(prev => [...prev, selected]);

        if (roundItems.length === 2) {
            const remaining = items.slice(2);
            if (remaining.length === 0) {
                if (nextRound.length === 0) {
                    setWinner(selected);
                    axios.post('/api/preferences', {
                        user_id: 1,
                        selections: [{ category, value: selected.name }]
                    });
                    setTimeout(() => navigate('/result'), 1000);
                } else {
                    setItems(nextRound);
                    setRoundItems(nextRound.slice(0, 2));
                    setNextRound([]);
                }
            } else {
                setItems(remaining);
                setRoundItems(remaining.slice(0, 2));
            }
        }
    };

    if (!roundItems.length) return <div className="p-8">로딩 중...</div>;

    const [left, right] = roundItems;

    return (
        <div className="p-8">
            <h2 className="text-xl font-bold mb-4">{category} 월드컵</h2>
            <div className="grid grid-cols-2 gap-4">
                <div
                    onClick={() => handleSelect(left)}
                    className="border p-4 cursor-pointer hover:bg-gray-100"
                >
                    <img src={left.image} alt={left.name} className="w-full h-40 object-cover mb-2" />
                    <p className="text-center">{left.name}</p>
                </div>
                <div
                    onClick={() => handleSelect(right)}
                    className="border p-4 cursor-pointer hover:bg-gray-100"
                >
                    <img src={right.image} alt={right.name} className="w-full h-40 object-cover mb-2" />
                    <p className="text-center">{right.name}</p>
                </div>
            </div>
        </div>
    );
}
