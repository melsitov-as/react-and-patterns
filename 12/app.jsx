import Header from "./header.jsx";
import Main from "./main.jsx";
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
                <article className="product product--sale">
                  {product.type && <mark>{product.type}</mark>}
                  <h3><a href="#">{product.title}</a></h3>
                  <p>{product.price} ₽</p>
                </article>
              </li>
            ))
          }
        </ul>
      </Main>
    </React.Fragment>
  );
};
Сперва разберёмся со случаем, когда ярлык вовсе не нужно показывать. В этом нам поможет паттерн «Условный рендеринг».

Суть его проста: часто нам приходится рендерить компоненты в зависимости от условия. В JSX нельзя использовать if...else. Тернарный оператор — монстр. На помощь приходят && и ||. Условное «и», условное «или» соответственно.

Чтобы не показывать ярлык в случае, когда type: null, используем &&.