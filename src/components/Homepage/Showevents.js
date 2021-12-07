import React, { useState } from 'react';
import Eventdata from '../../Data/Eventdata';
import Events from './Events';
const Showevents = () => {
    const data=Eventdata
    const [Event]=useState(data)
    
    return (
        <div>
            
            <div className="row">
                
                {
                    Event.map(key=><Events Edetails={key}></Events>)
                }
            </div>
        </div>
    );
};

export default Showevents;