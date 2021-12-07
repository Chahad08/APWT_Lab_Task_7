import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import PackagesdetailsId from './PackagesdetailsId';

const Packagesdetails = () => {
    const {id}=useParams()
    const [Package,setPackage]=useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/packagedetails/${id}`)
        
        .then(res=>{
            console.log(res.data);
            setPackage(res.data)    
        })
    },[])
    console.log(Package)
    return (
        <div>
            {
                <PackagesdetailsId details={Package}></PackagesdetailsId>
            }
        </div>
    );
};

export default Packagesdetails;