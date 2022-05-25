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
                          ? `product--bestseller`
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
...а во-вторых, даже если забыть про критерий, нам придётся поддерживать это условие, когда появится новый тип товара, а потом снова, когда появится ещё один. И так до бесконечности.