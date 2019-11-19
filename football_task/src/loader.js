import React from 'react';
import Loader from './assets/images/loader.svg';

const loader = (props) => {
    return (
        <div className="waitingComponent">
            <div className="waitingContent">
                <img src={Loader} alt="Loader" />
            </div>
        </div>        
    );
}

export default loader;