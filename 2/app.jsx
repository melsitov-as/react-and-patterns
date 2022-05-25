export default () => {
    return (
      <React.Fragment>
        <header>
          <h1>Товары для котиков</h1>
        </header>
        <main>
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
        </main>
      </React.Fragment>
    );
  };

  Первый паттерн — использование дочерних элементов. Взгляните на JSX, она позволяет нам строить иерархию подобно HTML как из знакомых нам тегов, так и из компонентов. В том числе самописных.

Для этого используется служебный пропс children. Давайте с его помощью превратим теги header и main в компоненты, которые отрисовывают своё содержимое — дочерние элементы.

Для этого заведём два отдельных файла с функциональными компонентами, которые в соответствующие теги отрисовывают своё содержимое.