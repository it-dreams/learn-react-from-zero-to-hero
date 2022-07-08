import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

function Categories() {
    let { category } = useParams();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="container my-5">
            <h1 className='text-start'><strong><u>Categories:</u></strong> {category ? capitalizeFirstLetter(category) : '-'}</h1>
            <Outlet />
        </div>
    )
}

export default Categories;
