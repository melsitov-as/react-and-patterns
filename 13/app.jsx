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
                  <h3><a href="#">{product.title || `Артикул ${product.id}`}</a></h3>
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
Условное «или» нам пригодится, когда нужно показать что-то взамен. Представим, что у товара может не быть названия. В таком случае нужно вывести «Артикул N», где N — айдишник товара. Используем ||, и задача решена.