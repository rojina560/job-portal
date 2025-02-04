import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HotjobsCart = ({job}) => {
    const { _id,company_logo, company, title, requirements,description,location, salaryRange
    } = job || {}
    return (
    <div> <div className="card card-compact bg-base-100 h-[360px] shadow-xl">
      <div  className='flex gap-2 m-2'>
      <div>
  <figure>
    <img className='w-16'
      src={company_logo}
      alt="Shoes" />
  </figure>
  </div>
  <div>
    <h4 className='text-2xl'>
    </h4>{company}
    <p className='flex gap-2 items-center'> <FaMapMarkerAlt />{location} </p>
    </div>
      </div>
  
  <div className="card-body">
    <h2 className="card-title">{title}
    <div className='badge badge-secondary'>new</div>
    </h2>
    <p>{description}</p>
    <div className='flex gap-2 flex-wrap'>
      {
        requirements.map((skill,index) => <p key={index} className='border rounded-md text-center px-2 hover:text-pink-600 hover:bg-gray-400'>{skill}</p>)
      }
    </div>
   
    <div className="card-actions justify-end items-center mt-4">
      <p className='flex items-center'>Salary: <FaDollarSign></FaDollarSign> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
    <Link to={`/jobs/${_id}`}><button className="btn btn-secondary">Apply</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HotjobsCart;