import React from 'react';

export default function ResultCard({ label }) {
    return (
        <div className="border p-4 rounded-lg shadow-md w-64">
            <h3 className="text-lg font-bold text-center text-primary">{label}</h3>
        </div>
    );
}