import "./Signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import {  Link } from "react-router-dom";
import { useState } from "react";
import { NavLink} from "react-router-dom";

function Signup() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [err, setErr] = useState("");
  let [state, setState] = useState(false);
  let [signupSuccess, setSignupSuccess] = useState(false);

  async function onSignUpFormSubmit(userObj) {
    let endpoint = userObj.userType === 'author' 
      ? 'http://localhost:4000/author-api/user' 
      : 'http://localhost:4000/user-api/user';

    // Make the request to the appropriate endpoint
    console.log(`Sending request to ${endpoint} with data:`, userObj);
    let res = await axios.post(endpoint, userObj);
    console.log(userObj)
    console.log(res);
    if (res.status === 201) {
      setState(true);
      setSignupSuccess(true);
      setErr("");
    } else {
      setErr(res.data.message);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              {signupSuccess === true ? (
                <div>
                  <p className="lead fs-3 text-center display-4 text-success">
                    User registration success
                  </p>
                  <p className="text-center fs-6 text-secondary">
                    Proceed to <Link to="/signin">Login</Link>
                  </p>
                  <p className="text-center fs-6 text-secondary">
                    Back to <Link to="/">Home</Link>
                  </p>
                </div>
              ) : (
                <h2 className="p-3 heading">Signup</h2>
              )}
            </div>
            <div className="card-body">
              {err.length !== 0 && (
                <p className="lead text-center text-danger">{err}</p>
              )}

              <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
                {/* radio */}
                <div className="mb-4">
                  <label
                    htmlFor="user"
                    className="form-check-label me-3"
                    style={{
                      fontSize: "1.2rem"
                    }}
                  >
                    Register as
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="author"
                      value="author"
                      {...register("userType", { disabled: state })}
                    />
                    <label
                      htmlFor="author"
                      className="form-check-label"
                    >
                      Author
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="user"
                      value="user"
                      {...register("userType", { disabled: state })}
                    />
                    <label
                      htmlFor="user"
                      className="form-check-label"
                    >
                      User
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="username should not contain caps"
                    {...register("username", { disabled: state },{required:true , minLength:3 , maxLength:15})}
                  />
                  {errors.username?.type==='required' && (<p className='text-danger'>*username is required</p>)}
                  {errors.username?.type==='minLength' && <p className='text-danger'>*Minimum length is 4</p>}
                  {errors.username?.type==='maxLength' && <p className='text-danger'>*Maximum length is 15</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password should be 8-13 characters"
                    {...register("password", { disabled: state }, {required:true})}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="give a valid email"
                    {...register("email", { disabled: state }, {required:true})}
                  />
                  {errors.email?.type==='required' && <p className='text-danger'>*email is required</p>}
                </div>

                <div className="text-end">
                  
                  <button type="submit" className="log btn" disabled={state}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;