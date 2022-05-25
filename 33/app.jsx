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
Заменяем в цикле... вуаля, всё работает!