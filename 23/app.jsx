import Header from "./header.jsx";
import Main from "./main.jsx";
import ProductNew from "./product-new.jsx";
import {products} from "../data.js";

export default () => {
  return (
    <React.Fragment>
      <Header>
        <h1>Товары для котиков</h1>
      </Header>
      <Main>
        <ul className="products">
          {
            products.map((product) => (
              <li key={product.id}>
                <ProductNew className="product--in-list" product={product} />
              </li>
            ))
          }
        </ul>
      </Main>
    </React.Fragment>
  );
};
...что будет, если потребуется передавать класс снаружи? Прямо из списка. Попробуем.