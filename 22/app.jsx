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
                <ProductNew product={product} />
              </li>
            ))
          }
        </ul>
      </Main>
    </React.Fragment>
  );
};
Действительно, ярлыки подкрасились зелёным. Прокси работает. Но есть одна проблема...