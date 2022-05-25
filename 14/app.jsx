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
Идём дальше. Разберёмся с классами. Первое решение, которое приходит на ум — использовать тернарный оператор. Во-первых, мы нарушим критерий на ESLint, потому что линтер такое безобразие не пропустит, ...