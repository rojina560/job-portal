import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
  const {id} = useParams();
  const {user} = useAuth()
  const navigate = useNavigate()
  console.log(id,user);
  const handleApplyJob = e =>{
    e.preventDefault()
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
   
    console.log(linkedIn,github,resume);

    const jobApplication = {
      job_id : id,
      apllicant_email:user.email,
      linkedIn,github,resume
    }
    fetch('http://localhost:3000/job-applications',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(jobApplication)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/myjob')
      }

    })
   
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleApplyJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIN URL</span>
          </label>
          <input name='linkedIn' type="url" placeholder="LinkedIn url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input name='github' type="url" placeholder="github URL" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input name='resume' type="url" placeholder="Resume URL" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </form>
    </div>
  </div>

    );
};

export default JobApply;