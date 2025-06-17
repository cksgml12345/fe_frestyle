import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TrendPage() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        axios.get('/api/preferences/trends')
            .then(res => {
                if (res.data && res.data.data) {
                    setTrends(res.data.data);
                } else {
                    console.warn('트렌드 응답 형식이 예상과 다릅니다:', res.data);
                }
            })
            .catch(err => {
                console.error('트렌드 데이터 불러오기 실패:', err);
            });
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">취향 트렌드</h2>
            {trends.length === 0 ? (
                <p>데이터가 없습니다.</p>
            ) : (
                <ul className="space-y-2">
                    {trends.map((trend, index) => (
                        <li key={index} className="border-b pb-2">
                            <strong>{trend.category}</strong>: {trend.value} ({trend.count}명)
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
