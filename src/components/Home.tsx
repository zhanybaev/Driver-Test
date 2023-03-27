import React from 'react';
import {data} from '../utils/data'

const Home = ():JSX.Element => {
    return (
        <div>
            <h1>Home</h1>
            {
                data.map(item=>(
                    <h1>{item.topic}</h1>
                ))
            }
        </div>
    );
};

export default Home;