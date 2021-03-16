import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import './Users.css';

interface IUser {
  email: string;
  password: string;
};

type Props = {
  token: string;
  isLoggedIn: Function;
}

const Signin: React.FC<Props> = ({ token, isLoggedIn }: Props) => {

  let history = useHistory();

  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [success, setSuccess] = useState('');

  const { register, handleSubmit, errors } = useForm<IUser>();

  const submitForm = async (data: IUser) => {
    const userRequest = await fetch('https://mini-netflix-by-joy.herokuapp.com/user/signin', {
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
    const result = await submitForm(data);
    if(result.error) {
      setSuccess('');
      if(result.error === 'User not found!') {
        setError('');
        setError2('Sorry, email has not been registered.');
      } else if(result.error === 'Incorrect password!') {
        setError2('');
        setError('Incorrect password!');
      }
    } else {
      setError('');
      setError2('');
      isLoggedIn(result.token, result.userId);
      history.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      { error !== '' && <div className='alert alert-danger'>
        Error: { error }
      </div> }
      { error2 !== '' && <div className='alert alert-danger'>
        Error: { error2 }
        <Link to="/signup">&nbsp;&nbsp; Please signup</Link>
      </div> }
      {success !== '' && <div className='alert alert-success'>
        { success }
      </div> }
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" className="form-control" name="email" placeholder="Enter email" ref={register({ required: true, pattern: /.+@.+/ })} />
        {errors?.email?.type === "required" && ( <div className="error">Email is required.</div> )}
        {errors?.email?.type === "pattern" && ( <div className="error">Email should be in xxx@yyy.zzz format.</div> )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" placeholder="Password" ref={register({ required: true })} />
        {errors.password && <span className="error">You do have a password.</span>}
      </div>
      <button type="submit" className="btn-back">Signin</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Don't Have An Account? <Link to="/signup" type="submit" className="signup-btn">Sign Up</Link>
    </form>
  )
}

export default Signin;
