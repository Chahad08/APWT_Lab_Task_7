import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Packagedata from '../../Data/Packagedata';
import Packages from './Packages';
const Showpackages = () => {
    const [packages,setPackages]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/packages/list')
        .then(res=>{
            setPackages(res.data);
            console.log(res.data)})
    },[])
    
    return (
        <div>
            
            <div className="row">
                
                {
                    packages.map(key=><Packages details={key}></Packages>)
                }
            </div>
        </div>
    );
    
};

export default Showpackages;