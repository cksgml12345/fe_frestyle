import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/preferences';

export const savePreference = async (user_id, category, choice) => {
    try {
        const res = await axios.post(BASE_URL, {
            user_id,
            category,
            choice
        });
        return res.data;
    } catch (err) {
        console.error('취향 저장 실패:', err);
        throw err;
    }
};

export const getPreferencesByUser = async (user_id) => {
    try {
        const res = await axios.get(`${BASE_URL}/${user_id}`);
        return res.data;
    } catch (err) {
        console.error('취향 불러오기 실패:', err);
        throw err;
    }
};
