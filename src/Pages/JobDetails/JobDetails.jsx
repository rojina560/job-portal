import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id,company,title,applicationDeadline} =  useLoaderData();
    return (
        <div className='m-10'>
            <h1>{title}</h1>
            <h2> apply for: {company}</h2>
            <p> deadline: {applicationDeadline}</p>
           <Link to={`/jobApply/${_id}`}> <button className='btn btn-secondary'>apply</button></Link>
        </div>
    );
};

export default JobDetails;