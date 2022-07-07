import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

function Categories() {

    const [text, setText] = useState('');

    const titleCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    let {category} = useParams();
    return (
        <div className="container my-5">
            {/* <h1 className='text-start'><u>Categories:</u> - {category}</h1> */}
            <h1 className='text-start'><u>Categories:</u> - </h1>
            <Outlet />
        </div>
    )
}

export default Categories;
