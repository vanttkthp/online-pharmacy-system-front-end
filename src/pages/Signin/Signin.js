import React, { useState } from "react";

import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
// import IconCancel from '../../components/IconComponents/IconCancel/IconCancel' //thieu

import bgsignin from "../../assets/images/bg-signin.png";
import sigin from "../../assets/images/signin.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import IconCancelComponent from "../../components/IconCancelComponent/IconCancelComponent";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";

const SignIn = () => {
  const navigate = useNavigate();
  
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const {data, isLoading} = mutation
  console.log("mutation", mutation);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOnchangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnchangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
    console.log("sign-in", email, password);
  };

  return (
    <div className="signin-ctn">
      <div className="bg-signin-ctn">
        <img src={bgsignin} />
      </div>
      <div className="content-signin-ctn">
        <div className="img-signin-ctn">
          <img src={sigin} />
        </div>
        <div className="form-signin-container">
          <IconCancelComponent />
          <form className="form-sigin-ctn" action="#">
            <div className="text-title-singin">
              Hello ! Wellcome to Pharmacy
            </div>
            <div className="input-singin-ctn">
              <label>Email address</label>
              <input
                value={email}
                type="text"
                className="shadow"
                placeholder="Email address"
                onChange={handleOnchangeEmail}
              ></input>
            </div>
            <div className="input-singin-ctn">
              <label>Password</label>
              <div className="input-password-ctn">
                <input
                  value={password}
                  type={showPassword ? "text" : "password"}
                  className="shadow"
                  placeholder="Password"
                  onChange={handleOnchangePassword}
                />
                <div
                  className="icon-eye-ctn"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="icon-eye"
                  />
                </div>
              </div>
            </div>
            <p className="text-small">Forgot Password ?</p>
            {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
           
            <button type="submit" className="shadow" onClick={handleSignIn}>
              Login
            </button>
          
          </form>
          <div className="link-signup-ctn">
            <div className="text-small">Don't have an account?</div>
            <Link to="/sign-up">
              <div className="link-signup">Sign up</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
