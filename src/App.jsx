import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import WorldcupPage from './pages/WorldcupPage';
import ResultPage from './pages/ResultPage';
import TrendPage from './pages/TrendPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/worldcup" element={<WorldcupPage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/trend" element={<TrendPage />} />
            </Routes>
        </Router>
    );
}

export default App;