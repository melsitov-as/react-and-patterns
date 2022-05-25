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

  
  Давайте разберём несколько популярных паттернов при разработке на React. Сделаем это на примере небольшого приложения для магазина Кекса. Вёрстка готова, стили тоже.