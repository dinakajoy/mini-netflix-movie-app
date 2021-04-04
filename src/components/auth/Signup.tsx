import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Users.css';

interface IUser {
  name: string;
  email: string;
  password: string;
};

const Signup: React.FC = () => {

  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm<IUser>();

  const submitForm = async (data: IUser) => {
    const userRequest = await fetch('https://mini-netflix-by-joy.herokuapp.com/user/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const response = await userRequest.json();
    return response;
  };

  const onSubmit = async (data: IUser) => {
    setIsLoading(true);
    const result = await submitForm(data);
    if(result.error) {
      setSuccess('');
      if(result.error.code === 11000) {
        setError('');
        setIsLoading(false);
        setError2('Email has already been registered.');
      } else {
        setError2('');
        setIsLoading(false);
        setError('Sorry, there was an error making a request.');
      }
    } else {
      setError('');
      setIsLoading(false);
      setSuccess(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      { error !== '' && <div className='alert alert-danger'>
        Error: { error }
      </div> }
      { error2 !== '' && <div className='alert alert-danger'>
        Error: { error2 }
        <Link to="/signin">&nbsp;&nbsp; Please Signin</Link>
      </div> }
      {success !== '' && <div className='alert alert-success'>
        { success }
        <Link to="/signin">&nbsp;&nbsp; Please Signin</Link>
      </div> }
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" className="form-control" name="name" placeholder="Enter your name" ref={register({ required: true })} />
          {errors.name && <span className="error">Name is required.</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" className="form-control" name="email" placeholder="Enter email" ref={register({ required: true, pattern: /.+@.+/ })} />
        {errors?.email?.type === "required" && ( <div className="error">Email is required.</div> )}
        {errors?.email?.type === "pattern" && ( <div className="error">Email should be in xxx@yyy.zzz format.</div> )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" placeholder="Password" ref={register({ required: true })} />
        {errors.password && <span className="error">Password is required.</span>}
      </div>
      <button type="submit" className="btn-back">{ isLoading ? 'Submitting...' : 'Sign Up' }</button>
    </form>
  )
};

export default Signup;