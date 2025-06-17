import React from 'react';
import ChartBlock from '../components/ChartBlock';

export default function TrendPage() {
    return (
        <div className="min-h-screen p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">전체 사용자 트렌드</h2>
            <ChartBlock title="가장 인기 있는 선택" type="bar" />
            <ChartBlock title="항목별 선호 비율" type="doughnut" />
        </div>
    );
}