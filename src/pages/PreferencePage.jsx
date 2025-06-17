import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PreferencePage() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/api/items/categories').then(res => {
            setCategories(res.data);
        });
    }, []);

    const handleSelectCategory = (category) => {
        navigate(`/worldcup/${category}`);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">카테고리를 선택하세요</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className="p-4 border rounded cursor-pointer hover:bg-gray-100 text-center"
                        onClick={() => handleSelectCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
}
