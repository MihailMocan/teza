import { useForm } from "react-hook-form";
import style from "./index.module.scss";
import { ServiceAPIInstance } from "../../../Axios/service";
export const CheckPassport = ({ onChange }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (idnp) => {
    try {
      const data = await ServiceAPIInstance.checkIDNP(idnp);
      if (data.statusCode === 200) {
        onChange({ ...data.data });
      } else {
        onChange(null);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex" }}>
        <input
          placeholder={"Your IDNP ..."}
          className={style.inputIDNP}
          type={"text"}
          {...register("idnp", { required: true })}
        />
        <button className={style.buttonCheck}>Check </button>
      </form>
    </div>
  );
};
