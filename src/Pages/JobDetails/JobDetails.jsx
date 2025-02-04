import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {company,title,applicationDeadline} =  useLoaderData();
    return (
        <div className='m-10'>
            <h1>{title}</h1>
            <h2> apply for: {company}</h2>
            <p> deadline: {applicationDeadline}</p>
            <button className='btn btn-secondary'>apply</button>
        </div>
    );
};

export default JobDetails;