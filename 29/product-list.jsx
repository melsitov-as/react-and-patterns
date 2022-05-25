import Product from "./product.jsx";
import {Type} from "../data.js";

export default ({products}) => {
  return (
    <ul className="products">
      {
        products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))
      }
    </ul>
  );
};
