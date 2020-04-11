import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className='demo-1'>
                <div className="child">home</div>
                <Link to="/liftcycle">toLifeCycle</Link>
            </div>

        </div>
    )
}

export default Home