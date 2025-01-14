import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';
const Register = () => {
       const authInfo = useContext(AuthContext) ;
       console.log(authInfo)
       const {createUser} = authInfo 
        const handleRegister = (e) =>{
          
        e.preventDefault() ;
        const email = e.target.email.value ; 
        const password =  e.target.password.value ; 
        const name =  e.target.name.value 
        console.log("submit")
        console.log(email , password , name) ;
        createUser(email , password)
        .then( result => {
          console.log(result.user)
        })
        .catch(console.error(error));
      }
        
        
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input type="text" 
                name='name'
                placeholder="Name " className="input input-bordered" required />
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" 
                name='email'
                placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" 
                name='password'
                placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>Already hava a account ? please
              <Link className='text-blue-400 underline' to = '/login'> Login</Link>
              
               </p>

               
               <p>
                 <button className='btn btn-link'>Google</button>
               </p>

               
          </div>
        </div>
      </div>
    );
};

export default Register;