import React from 'react';
import loading from '../../assest/images/loading1.gif';

function Spinner() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Spinner;
