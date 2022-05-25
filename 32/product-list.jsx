import Product from "./product.jsx";
import ProductNew from "./product-new.jsx";
import ProductSale from "./product-sale.jsx";
import {Type} from "../data.js";

const getComponentByType = (type, product) => {
  switch (type) {
    case Type.SALE:
      return <ProductSale product={product} />;
    case Type.NEW:
      return <ProductNew product={product} />;
  }

  return <Product product={product} />;
};

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
