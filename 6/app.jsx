import Header from "./header.jsx";
import Main from "./main.jsx";

export default () => {
  return (
    <React.Fragment>
      <Header render={() => (<h1>Товары для котиков</h1>)} />
      <Main>
        <ul className="products">
          <li>
            <article className="product product--sale">
              <mark>Сейл</mark>
              <h3><a href="#">Пищалка</a></h3>
              <p>500 ₽</p>
            </article>
          </li>
          <li>
            <article className="product product--new">
              <mark>Нью</mark>
              <h3><a href="#">Дразнилка</a></h3>
              <p>5 ₽</p>
            </article>
          </li>
          <li>
            <article className="product">
              <h3><a href="#">Лежанка</a></h3>
              <p>2400 ₽</p>
            </article>
          </li>
        </ul>
      </Main>
    </React.Fragment>
  );
};
В компоненте, в свою очередь, нужно заменить использование пропса children на render, и добавить (), поскольку это функция.

Также удалим вложенные элементы, чтобы проверить, что всё работает.