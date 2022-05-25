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
В JSX ни if...else, ни switch нельзя. Зато можно вызвать функцию, в которой будет и то, и другое.