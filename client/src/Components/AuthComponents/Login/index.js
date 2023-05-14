import React from "react";
import { useForm } from "react-hook-form";
import style from "../index.module.scss";
import { AuthRequestInstance } from "../../../Axios/auth";
export const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (userInfo) => {
    AuthRequestInstance.login(userInfo);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.label}>Login</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                {...register("email", { required: true })}
                placeholder={"Email"}
              />
            </div>

            <div className={style.inputContainer}>
              <input
                type={"password"}
                {...register("password", { required: true })}
                placeholder={"Password"}
              />
            </div>
            <button type={"submit"}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
