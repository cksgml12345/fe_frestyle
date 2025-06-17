// src/components/OptionCard.jsx
import React from 'react';
import { FaCoffee, FaLeaf, FaPizzaSlice, FaHamburger } from 'react-icons/fa';

const iconMap = {
    '커피': <FaCoffee size={40} className="text-primary" />,
    '녹차': <FaLeaf size={40} className="text-green-600" />,
    '피자': <FaPizzaSlice size={40} className="text-yellow-500" />,
    '햄버거': <FaHamburger size={40} className="text-amber-700" />,
};

export default function OptionCard({ label, onClick }) {
    return (
        <div
            className="w-40 h-40 border border-gray-300 rounded-lg shadow hover:shadow-lg cursor-pointer flex flex-col justify-center items-center bg-white"
            onClick={onClick}
        >
            {iconMap[label] || <div className="text-2xl">❓</div>}
            <div className="text-center mt-2 text-sm font-medium">{label}</div>
        </div>
    );
}
