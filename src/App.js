import React,{ useState } from 'react';
import useFormValidation from './useFormValidation';
import 'bootstrap/dist/css/bootstrap.min.css';
import validateForm from './validateForm';

const initialState={
  name: '',
  email: '',
  age: '',
  attendingWithGuest: false,
  guestName: '',
};

const App=() => {
  const { formData,errors,handleChange,handleSubmit }=useFormValidation(initialState,validateForm);
  const [showSummary,setShowSummary]=useState(false);

  const onSubmit=(e) => {
    handleSubmit(e);
    if (Object.keys(errors).length===0) {
      setShowSummary(true);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Event Registration Form</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name&&<div className="text-danger">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email&&<div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} />
          {errors.age&&<div className="text-danger">{errors.age}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Are you attending with a guest?</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="attendingWithGuest" name="attendingWithGuest" checked={formData.attendingWithGuest} onChange={handleChange} />
            <label className="form-check-label" htmlFor="attendingWithGuest">Yes</label>
          </div>
        </div>

        {formData.attendingWithGuest&&(
          <div className="mb-3">
            <label htmlFor="guestName" className="form-label">Guest Name</label>
            <input type="text" className="form-control" id="guestName" name="guestName" value={formData.guestName} onChange={handleChange} />
            {errors.guestName&&<div className="text-danger">{errors.guestName}</div>}
          </div>
        )}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {showSummary&&(
        <div className="mt-5">
          <h2>Registration Summary</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Attending with Guest:</strong> {formData.attendingWithGuest? 'Yes':'No'}</p>
          {formData.attendingWithGuest&&(
            <p><strong>Guest Name:</strong> {formData.guestName}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
