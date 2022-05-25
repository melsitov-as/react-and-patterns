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
Давайте это исправим. Для этого с помощью деструктуризации извлечём переданный снаружи className. Остальные пропсы соберём с помощью rest-оператора. Полученный className соединим с классом в нашем прокси. Остальные пропсы передадим как есть.