import React, {component} from 'react';
import ani from 'images/ani';

const hello =()=>{
    return(
        <div>
            <img src={ani}/>
            <p>Hello from my React Component</p>
        </div>
    )
}

export default hello;