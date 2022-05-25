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
А вот в пропсы функции передавать можно. Такой паттерн называется render-prop.

Давайте передадим заголовок в шапку с помощью этого паттерна. Для этого заведём у компонента пропс render.

Обратите внимание, render — общепринятое название, а не служебное, как например children.