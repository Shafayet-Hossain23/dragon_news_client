import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../News/News';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h3 className='text-center mb-4'>Total news found ({data.length})</h3>
            <div>
                {
                    data.map(news => <News key={news._id} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default Home;