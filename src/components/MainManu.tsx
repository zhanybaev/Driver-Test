import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../utils/data'

const MainMenu = ():JSX.Element => {    
    return (
        <div>
            <h1 className="headText">MENU</h1>
            {
                data.map(item=>(
                    <Link key={item.id} to={`quiz/${item.topicName}`}>
                        <h2 className='topicName'>{item.topicName}</h2>
                    </Link>
                ))
            }
        </div>
    );
};

export default MainMenu;