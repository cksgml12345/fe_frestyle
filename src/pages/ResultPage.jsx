import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ResultPage() {
    const [preferences, setPreferences] = useState([]);
    const userId = 1; // ✅ 실제 구현 시 로그인한 사용자의 ID로 대체 필요

    useEffect(() => {
        axios.get('/api/preferences')
            .then(res => {
                if (res.data && res.data.data) {
                    const userPrefs = res.data.data.filter(p => p.user_id === userId);
                    setPreferences(userPrefs);
                } else {
                    console.warn('응답 형식이 예상과 다릅니다:', res.data);
                }
            })
            .catch(err => {
                console.error('결과 불러오기 실패:', err);
            });
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-xl font-bold mb-4">당신의 선택 결과</h2>
            {preferences.length === 0 ? (
                <p>선택한 항목이 없습니다.</p>
            ) : (
                <ul className="space-y-2">
                    {preferences.map((pref, idx) => (
                        <li key={idx}>
                            <strong>{pref.category}</strong>: {pref.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
