import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
// import IconCancel from '../../components/IconComponents/IconCancel/IconCancel' //thieu

import bgsignin from "../../assets/images/bg-signin.png";
import sigin from "../../assets/images/signin.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import IconCancelComponent from "../../components/IconCancelComponent/IconCancelComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ButtonInputSearch from "../../components/ButtonInputSearch/ButtonInputSearch";
import { Button } from "antd";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const mutation = useMutationHooks((data) => UserService.signupUser(data));
  const {data, isLoading} = mutation
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleOnchangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnchangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleOnchangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSignUp = () => {
    mutation.mutate({email, password, confirmPassword})
    console.log("signup: ", email, password, confirmPassword);
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
            <div className="input-singin-ctn">
              <label>Confirm Password</label>
              <div className="input-password-ctn">
                <input
                  value={confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  className="shadow"
                  placeholder="Confirm password"
                  onChange={handleOnchangeConfirmPassword}
                />
                <div
                  className="icon-eye-ctn"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                    className="icon-eye"
                  />
                </div>
              </div>
            </div>
            <p className="text-small">Forgot Password ?</p>
            {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
            <button type="submit" className="shadow" onClick={handleSignUp}>
              Login
            </button>
          </form>
          <div className="link-signup-ctn">
            <div className="text-small">Don't have an account?</div>
            <Link to="/sign-in">
              <p className="link-signup">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
