import Header from "./header.jsx";
import Main from "./main.jsx";
import Product from "./product.jsx";
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
                <Product product={product} />
              </li>
            ))
          }
        </ul>
      </Main>
    </React.Fragment>
  );
};
Нам осталось лишь описать логику по выбору нужного компонента. Часто такой паттерн называют «Контейнер».

Начинаем дежурно — создаём компонент. Переносим в него отрисовку списка продуктов.