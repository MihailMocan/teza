import style from "../index.module.scss";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export const LoginForm = ({ login }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (userInfo) => {
    login(userInfo);
  };
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.label}>Login</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputContainer}>
              <input
                className={style.inputAuth}
                type={"text"}
                {...register("email", { required: true })}
                placeholder={"Email"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                className={style.inputAuth}
                type={"password"}
                {...register("password", { required: true })}
                placeholder={"Password"}
              />
            </div>
            <div style={{ marginTop: "-20px", marginBottom: "15px" }}>
              <a href={"/registration"}>Registration </a>
            </div>
            <button className={style.authButton} type={"submit"}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
