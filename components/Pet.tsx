import React from 'react';

const Pet = () => {
    return (
        <div style={{ border: '2px solid #333', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
            <h2>Your Virtual Pet</h2>
            <div style={{ height: '100px', width: '100px', borderRadius: '50%', backgroundColor: '#ffcc00', margin: 'auto' }}>
                {/* Here you can add an image or animation of your pet */}
            </div>
            <p>Name: Fluffy</p>
            <p>Type: Cat</p>
            <p>Age: 2 years</p>
        </div>
    );
};

export default Pet;