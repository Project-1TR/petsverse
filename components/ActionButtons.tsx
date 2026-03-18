import React from 'react';

const ActionButtons = () => {
    return (
        <div>
            <button onClick={() => alert('Feeding the pet')}>Feed</button>
            <button onClick={() => alert('Playing with the pet')}>Play</button>
            <button onClick={() => alert('Putting the pet to sleep')}>Sleep</button>
        </div>
    );
};

export default ActionButtons;