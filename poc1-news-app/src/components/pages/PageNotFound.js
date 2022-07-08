import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    const PnfStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        height: '85vh'
    };

    return (
        <div style={PnfStyle}>
            <h1 style={{ fontSize: '80px', fontWeight: 'bold', color: 'orange' }}>404</h1>
            <p>Oops... Page is not found!</p>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default PageNotFound;
