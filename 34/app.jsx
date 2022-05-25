import Header from "./header.jsx";
import Main from "./main.jsx";
import ProductList from "./product-list.jsx";
import {products} from "../data.js";

export default () => {
  return (
    <React.Fragment>
      <Header>
        <h1>Товары для котиков</h1>
      </Header>
      <Main>
        <ProductList products={products} />
      </Main>
    </React.Fragment>
  );
};
Посмотрите, насколько код нашего проекта стал чище и понятнее. Сравните с тем, что было на первом шаге! И это мы рассмотрели всего пару-тройку паттернов, а их огромное множество.