import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Useform = () => {
    const {register,handleSubmit,watch,reset,formState:{errors,isSubmitSuccessful,isSubmitted}} = useForm(); // useForm is created to handle inputs of form
    console.log(errors)
  
    // function that will execute after data is submitted 
    const formSubmitHandler = (data)=>{
      toast("Form submitted",{
        theme : 'dark'
      })
      console.log(data);
    }
  return (
    <div className='form-container'>
         <ToastContainer />
        <fieldset>
            <legend>Fill this Form</legend>
            <form onSubmit={handleSubmit(formSubmitHandler)} >
                {/* Success Message  */}
                <div className='success'>
                  {isSubmitSuccessful && <p>Registration Successful</p>}
                </div> 

                <label> First Name </label>
                <input type="text" name='firstName' {...register("firstName",{
                  required: "Fill The First Name", 
                  minLength: {value : 4,
                    message : "Minimum 4 chars required."
                  },
                  maxLength: {value : 8,
                    message : "Minimum 8 chars required."
                  }
                })} />
                {/* {errors.firstName && <p className='err'>{errors.firstName.message}</p>} */}
                <p className='err'>{errors.firstName?.message}</p>
                

                <label> Last Name </label>
                <input type="text" name='lastName' {...register("lastName",{
                  required: "Fill The Last Name",
                   minLength: {value : 4,
                    message : "Minimum 4 chars required."
                  }
                })} />
                 <p className='err'>{errors.lastName?.message}</p>
                

                <label>Email</label>
                <input type="text" name='email' {...register("email",{
                  required : "Enter Email",
                  pattern : {
                    value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message : "Include an @ in your email"
                  }
                })} />
                 <p className='err'>{errors.email?.message}</p>
                

                <label> Password </label>
                <input type="password"  name='password' {...register("password",{
                  required: "Enter Password",
                   minLength: {value : 5,
                    message : "Password must be more than 4 characters."
                  },
                  maxLength : {
                    value : 20,
                    message : "Password cannot be more than 20 characters."
                  },
                  pattern : {
                    value : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
                    message : "Password is not valid"
                  }
                })} />
                 <p className='err'>{errors.password?.message}</p>
                <div className='flex' style={{
                  justifyContent : 'space-between'
                }}>
                <button className='reset' onClick={()=>{reset()}}>Reset</button>
                <input className='button' type="submit" value={"Register"} />
                </div>
            </form>
        </fieldset>
    </div>
  )
}

export default Useform