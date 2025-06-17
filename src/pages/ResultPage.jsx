import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';

export default function ResultPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const results = location.state?.result || [];

    return (
        <div className="min-h-screen p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">당신의 선택 결과</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {results.map((item, idx) => (
                    <ResultCard key={idx} label={item} />
                ))}
            </div>
            <button
                onClick={() => navigate('/trend')}
                className="bg-blue-500 text-white px-4 py-2 mt-6 rounded-lg hover:bg-blue-600"
            >
                트렌드 보기
            </button>
        </div>
    );
}