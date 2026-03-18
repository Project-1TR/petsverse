import React from 'react';

const GameStats: React.FC<{ hunger: number; happiness: number; energy: number }> = ({ hunger, happiness, energy }) => {
    return (
        <div>
            <h2>Pet Stats</h2>
            <ul>
                <li>Hunger: {hunger}</li>
                <li>Happiness: {happiness}</li>
                <li>Energy: {energy}</li>
            </ul>
        </div>
    );
};

export default GameStats;