import React from 'react';

const AddJobs = () => {
  const handleAddjob = e  =>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries())
    console.log(initialData);
    const { min,max,currency, ...newJob} = initialData
    console.log(newJob);
    newJob.salaryRange = {min,max,currency}
   newJob.requirment = newJob.requirment.split('\n');
   newJob.responsibility = newJob.responsibility.split('\n')
   console.log(newJob);
   fetch('',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(newJob)
   })
   .then(res =>res.json())
   .then(data =>{
    console.log(data);
   })


  }
    return (
        <div>
            <form onSubmit={handleAddjob} className="card-body">
        <div className="form-control">
            {/* job title */}
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" name='title' placeholder=" Job Title" className="input input-bordered" required />
        </div>
        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />
          
        </div>
        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select name='job_type' className="select select-ghost w-full max-w-xs">
            <option disabled selected>Pick the best job type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
            </select>
        </div>
        {/* job field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select name='job_field' className="select select-ghost w-full max-w-xs">
            <option disabled selected>Pick a Job Field</option>
            <option>Engineering</option>
            <option>marketing</option>
            <option>Finance</option>
            </select>
        </div>
        {/* salary range */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 items-end'>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Salary Range</span>
          </label>
          <input type="number" name='min' placeholder="Min" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <input type="number" name='max' placeholder="Max" className="input input-bordered" required />
          
        </div></div>
        {/* job currency */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Currency</span>
          </label>
          <select name='currency' className="select select-ghost w-full max-w-xs">
            <option disabled selected>Currency</option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
            </select>
        </div>
        <div className="form-control">
            {/* job title */}
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea name='description'  className="textarea textarea-success" placeholder="Description" required></textarea>
        </div>
        <div className="form-control">
            {/* Company Name */}
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input type="text" name='company' placeholder="Company name" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* Requirments */}
          <label className="label">
            <span className="label-text">Job Requirments</span>
          </label>
          <textarea name='requirment'  className="textarea textarea-success" placeholder="Put each requirments in a new line" required></textarea>
        </div>
        <div className="form-control">
            {/* resposibility */}
          <label className="label">
            <span className="label-text">Job Resposibility</span>
          </label>
          <textarea name='responsibility'  className="textarea textarea-success" placeholder="write  each resposibility in a new line" required></textarea>
        </div>
        <div className="form-control">
            {/* HR name */}
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input type="text" name='hr_name' placeholder="HR name" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* HR email */}
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input type="email" name='hr_email' placeholder="HR Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            {/* Company logo */}
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input type="url" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
        </div>
        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
        </div>
    );
};

export default AddJobs;