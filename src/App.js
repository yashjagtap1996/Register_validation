import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {

  const { register, handleSubmit, errors } = useForm();
  const [userInfo,setUserInfo]=useState();

  const onSubmit=(data)=>{
    setUserInfo(data)
  }

  return (
    <>
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-4">
            <h1>Registration Page</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-2">
          <div className="col-md-4">
            <label htmlFor="name">Name</label>
            <br />
            <input style={{ width: "100%"}} type="text" name='Name' 
            ref={register({required:"Name is Required!"})} />
            <div className='text-danger'>{errors.Name?.message}</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <label htmlFor="email">Email</label>
            <br />
            <input style={{ width: "100%" }} type="text" name='email'
            ref={register({required:"Email is Required!",pattern:{value:/^\S+@\S+$/i,message:"This is Not Valid Email!"}})} />
            <div className='text-danger'>{errors.email?.message}</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <label htmlFor="phone">Phone</label>
            <br />
            <input style={{ width: "100%" }} type="number" name='phone'
            ref={register({required:"Phone No. is Required!",minLength:{value:10,message:"10 digit number is required"},
            maxLength:{value:10,message:"10 digit number is required"}})} />
            <div className='text-danger'>{errors.phone?.message}</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <label htmlFor="password">Password</label>
            <br />
            <input style={{ width: "100%" }} type="text" name='password'
            ref={register({required:"Password is Required!",minLength:{value:4,message:"minimum 4 characters required!"},
            maxLength:{value:8,message:"maximum 8 characters required!"}})} />
            <div className='text-danger'>{errors.password?.message}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default App
