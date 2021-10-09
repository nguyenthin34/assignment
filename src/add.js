import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { add } from "./api/productapi";
import "./css/addprd.css";
export default function Add(props) {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (product) => {
    try {
      const { data } = await add(product);
      props.onAdd(data);
      history.push("/product");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add_container">
      <form onSubmit={handleSubmit(onSubmit)} className="form_add">
        <div className="field" tabIndex={1}>
          <label htmlFor="username" className="css_witdh">
            <i className="far fa-user" />
            Product's Name
          </label>
          <input
            type="text"
            placeholder="e.g. john doe"
            required
            {...register("name", { required: true })}
          />
        </div>
        <div className="field" tabIndex={2}>
          <label className="css_witdh">
            <i className="far fa-envelope" />
            Product's Price
          </label>
          <input
            type="number"
            placeholder="Price"
            required
            {...register("price", { required: true })}
          />
        </div>
        <div className="field" tabIndex={3}>
          <label className="css_witdh">
            <i className="far fa-edit" />
            Product's description
          </label>
          <textarea
            placeholder="description"
            required
            defaultValue={""}
            {...register("description", { required: true })}
          />
        </div>
        <button className="css_btn">Add Product</button>
      </form>
    </div>
  );
}
