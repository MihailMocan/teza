import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import style from "../index.module.scss";
import { AuthRequestInstance } from "../../../Axios/auth";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../../Redux/Reducers/authReducer";

const Login = ({ isAuth, login }) => {
  const navigate = useNavigate();

  return isAuth ? navigate("/main") : <LoginForm login={login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
