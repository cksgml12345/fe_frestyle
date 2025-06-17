import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PreferencePage() {
    const [selections, setSelections] = useState([]);
    const navigate = useNavigate();

    const handleSelect = (category, value) => {
        setSelections((prev) => [...prev.filter(s => s.category !== category), { category, value }]);
    };

    const handleSubmit = async () => {
        await axios.post('/api/preferences/save', {
            user_id: 1,
            selections
        });
        navigate('/result');
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">당신의 취향을 알려주세요</h2>
            <div className="mb-6">
                <p className="mb-2 font-semibold">색깔 선호</p>
                <button onClick={() => handleSelect('color', 'red')} className="mr-2">빨강</button>
                <button onClick={() => handleSelect('color', 'blue')}>파랑</button>
            </div>
            <div className="mb-6">
                <p className="mb-2 font-semibold">음식 취향</p>
                <button onClick={() => handleSelect('food', 'pizza')} className="mr-2">피자</button>
                <button onClick={() => handleSelect('food', 'sushi')}>초밥</button>
            </div>
            <button onClick={handleSubmit} className="bg-[#92CFA5] px-4 py-2 rounded text-white">다음</button>
        </div>
    );
}