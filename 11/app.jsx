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
                  <mark>{product.type}</mark>
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
Импортируем массив с данными и отрисуем список по нему, конечно, подставив актуальные данные.

Всё отлично, только ярлыки показываются у всех продуктов, даже у тех, у кого type: null.

А ещё все продукты получили класс product--sale. Вряд ли мы этого ожидали. Давайте всё исправлять!