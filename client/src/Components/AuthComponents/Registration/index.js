import React from "react";
import { useForm } from "react-hook-form";
import style from "../index.module.scss";
import axios from "axios";
import { AuthRequestInstance } from "../../../Axios/auth";
export const Registration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (userInfo) => {
    AuthRequestInstance.registration(userInfo);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.label}>Sign up</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                {...register("firstName", { required: true })}
                placeholder={"First Name"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                {...register("lastName", { required: true })}
                placeholder={"Last Name"}
              />
            </div>
            <div className={style.inputContainer}>
              <span>Birthday : </span>
              <input
                type={"date"}
                {...register("birthday", { required: true })}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"email"}
                {...register("email", { required: true })}
                placeholder={"Email"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                {...register("nationality", { required: true })}
                placeholder={"Nationality"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                {...register("address", { required: true })}
                placeholder={"Address"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                {...register("city", { required: true })}
                placeholder={"City"}
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
