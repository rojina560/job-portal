import React, { useEffect, useState } from 'react';
import HotjobsCart from './HotjobsCart';

const Hotjobs = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then( data => setJobs(data))
    },[])
    console.log(jobs);
    return (
        <div>
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                jobs.map(job => <HotjobsCart key={job._id} job={job}></HotjobsCart>)
            }

            </div>
           
        </div>
    );
};

export default Hotjobs;
