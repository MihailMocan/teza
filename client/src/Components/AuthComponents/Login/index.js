import React from "react";
import { useForm } from "react-hook-form";
import style from "../index.module.scss";
import { AuthRequestInstance } from "../../../Axios/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (userInfo) => {
    const response = await AuthRequestInstance.login(userInfo);
    if (response.statusCode === 200) {
      navigate("/main");
    }
  };
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
            <button type={"submit"}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
