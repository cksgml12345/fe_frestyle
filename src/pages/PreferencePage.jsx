import React, { useEffect, useState } from 'react';
import { savePreference, getPreferencesByUser } from '../api/preferenceApi';

const PreferencePage = () => {
    const [preferences, setPreferences] = useState([]);
    const userId = 'user123';

    useEffect(() => {
        // 처음 마운트 시 사용자 데이터 불러오기
        const fetchData = async () => {
            const data = await getPreferencesByUser(userId);
            setPreferences(data);
        };
        fetchData();
    }, []);

    const handleSave = async () => {
        await savePreference(userId, '음악', '클래식');
        const updated = await getPreferencesByUser(userId);
        setPreferences(updated);
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">나의 취향</h1>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
                클래식 저장
            </button>

            <ul className="mt-4">
                {preferences.map((p) => (
                    <li key={p.id}>{p.category} - {p.choice}</li>
                ))}
            </ul>
        </div>
    );
};

export default PreferencePage;
