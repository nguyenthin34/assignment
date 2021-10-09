import { useForm } from "react-hook-form";
import { signin } from "../api/authAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sigbup.css";
import { useHistory } from "react-router";
export default function Signin() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // call api
      const result = await signin(data);
      console.log(result);
      // trả về dữ liệu user và lưu vào localStorage
      localStorage.setItem("info", JSON.stringify(result.data));
      // Hiển thị thông báo thành công
      toast.success("Đăng nhập thành công");
      history.push("/home");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Welcome Back</h2>
          <h4 className="animation a2">
            Log in to your account using email and password
          </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <ToastContainer />
          <input
            type="email"
            className="form-field animation a3"
            placeholder="Email Address"
            {...register("email")}
          />
          <input
            type="password"
            className="form-field animation a4"
            placeholder="Password"
            {...register("password")}
          />
          <button className="animation a6">Sign In</button>
        </form>
      </div>
      <div className="right" />
    </div>
  );
}
