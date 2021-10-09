import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import { remove } from "./api/productapi";
import "./css/prdcss.css";
export default function Product(props) {
  const removeProduct = async (id) => {
    try {
      remove(id);
      props.onDelete(id);
    } catch (error) {}
  };
  return (
    <div className="row">
      {props.products.map((product) => (
        <div className="card col-md-3 m-5" style={{ width: "18rem" }}>
          <img src={product.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.id}</li>
            <li className="list-group-item">{product.price}</li>
            <li className="list-group-item">{product.description}</li>
          </ul>
          <button
            type="button"
            className="btn_delete"
            onClick={() => removeProduct(product.id)}
          >
            Xóa
          </button>
          <div className="btn-group">
            <Link
              role="button"
              className="btn_update"
              to={"/product/edit/" + product.id}
            >
              Chỉnh sửa
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
