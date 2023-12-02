import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/news-categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories)


    return (
        <div style={{
            position: "sticky",
            top: "80px"
        }}>
            {
                categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSide;