import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { get, update } from "./api/productapi";
import "./css/addprd.css";
export default function Edit(props) {
  let history = useHistory();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [products, setProduct] = useState({});
  useEffect(() => {
    get(id).then((response) => {
      setProduct(response.data);
      reset(response.data);
    });
  }, [reset]);
  const onSubmit = (data) => {
    const product = {
      id: id,
      ...data,
    };
    update(product).then((response) => {
      props.onUpdate(response.data);
      history.push("/product");
    });
  };
  return (
    <div className="add_container">
      <form onSubmit={handleSubmit(onSubmit)} className="form_add">
        <div className="field" tabIndex={1}>
          <label htmlFor="username" className="css_witdh">
            <i className="far fa-user" />
            New Product's Name
          </label>
          <input
            type="text"
            placeholder="e.g. john doe"
            required
            defaultValue={products.name}
            {...register("name", { required: true })}
          />
        </div>
        <div className="field" tabIndex={2}>
          <label className="css_witdh">
            <i className="far fa-envelope" />
            New Product's Price
          </label>
          <input
            type="number"
            placeholder="Price"
            required
            defaultValue={products.price}
            {...register("price", { required: true })}
          />
        </div>
        <div className="field" tabIndex={3}>
          <label className="css_witdh">
            <i className="far fa-edit" />
            New Product's description
          </label>
          <textarea
            placeholder="description"
            required
            defaultValue={products.description}
            {...register("description", { required: true })}
          />
        </div>
        <button className="css_btn">Update Product</button>
      </form>
    </div>
  );
}
