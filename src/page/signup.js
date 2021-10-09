import { propTypes } from "react-bootstrap/esm/Image";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./sigbup.css";
import Signup from "../api/authAPI";
export default function Add(props) {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Signup(data);
  };
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Welcome to</h2>
          <h4 className="animation a2">
            Log up to your account using your info
          </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            type="text"
            className="form-field animation a3"
            placeholder="User Name"
            {...register("username", { required: true })}
          />
          <input
            type="text"
            className="form-field animation a3"
            placeholder="Full name"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            className="form-field animation a3"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            className="form-field animation a4"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <button className="animation a6">Sign Up</button>
        </form>
      </div>
      <div className="right" />
    </div>
  );
}
