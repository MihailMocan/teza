import React from "react";
import { useForm } from "react-hook-form";
import style from "../index.module.scss";
import axios from "axios";
import { AuthRequestInstance } from "../../../Axios/auth";
export const Registration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (userInfo) => {
    const response = await AuthRequestInstance.registration(userInfo);
    console.log("Response : ", response);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.label}>Sign up</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputContainer}>
              <input
                className={style.inputAuth}
                type={"text"}
                {...register("firstName", { required: true })}
                placeholder={"First Name"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                className={style.inputAuth}
                {...register("lastName", { required: true })}
                placeholder={"Last Name"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"date"}
                className={style.inputAuth}
                {...register("birthday", { required: true })}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"email"}
                className={style.inputAuth}
                {...register("email", { required: true })}
                placeholder={"Email"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                className={style.inputAuth}
                {...register("nationality", { required: true })}
                placeholder={"Nationality"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                className={style.inputAuth}
                {...register("address", { required: true })}
                placeholder={"Address"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"text"}
                className={style.inputAuth}
                {...register("city", { required: true })}
                placeholder={"City"}
              />
            </div>
            <div className={style.inputContainer}>
              <input
                type={"password"}
                className={style.inputAuth}
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
