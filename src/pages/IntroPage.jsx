import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IntroPage() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/preference');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">취향 월드컵</h1>
            <button onClick={handleStart} className="px-6 py-2 bg-green-500 text-white rounded">시작하기</button>
        </div>
    );
}