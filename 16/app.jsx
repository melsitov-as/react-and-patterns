import Header from "./header.jsx";
import Main from "./main.jsx";
import {Type, products} from "../data.js";

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
                <article className={
                  `product ${
                    product.type === Type.SALE
                      ? `product--sale`
                      : product.type === Type.NEW
                        ? `product--new`
                        : product.type === Type.BESTSELLER
                          ? `product--new`
                          : ``
                  }`
                }>
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
Решить проблему нам поможет паттерн proxy-component. Звучит немного сложно, но если отбросить всё лишнее — получим просто «обёртку». То есть мы создаём обёртку, которая сразу возвращает компонент с нужными настройками.

Но давайте начнём по порядку. Сначала выделим код продукта в отдельный компонент.