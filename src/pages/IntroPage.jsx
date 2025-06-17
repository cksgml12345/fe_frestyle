import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IntroPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
            <h1 className="text-4xl font-bold mb-4 text-primary">취향학개론</h1>
            <p className="text-lg text-gray-600 mb-6">당신의 취향을 선택하고, 분석하세요!</p>
            <button
                onClick={() => navigate('/worldcup')}
                className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
            >
                시작하기
            </button>
        </div>
    );
}