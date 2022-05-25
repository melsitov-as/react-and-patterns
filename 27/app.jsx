import Header from "./header.jsx";
import Main from "./main.jsx";
import ProductSale from "./product-sale.jsx";
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
                <ProductSale product={product} />
              </li>
            ))
          }
        </ul>
      </Main>
    </React.Fragment>
  );
};
По аналогии создадим прокси для товара по скидке. Проверим, что всё работает.

С помощью этого паттерна мы избегаем ветвления в коде компонента и разделяем ответственности. Если нужно будет поправить сам компонент продукта, изменения применятся сразу для всех типов. Если нужно будет для конкретного типа не просто класс добавлять, а ещё что-либо, не нужно разбираться в условиях. Просто подправить конкретный прокси.