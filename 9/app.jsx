import Header from "./header.jsx";
import Main from "./main.jsx";

export default () => {
  return (
    <React.Fragment>
      <Header>
        <h1>Товары для котиков</h1>
      </Header>
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
Но у нас пример, всё же, притянут за уши. Поэтому вернёмся к решению с children.

Не переживайте, полную силу render-prop вы почувствуете в работе с React Router.