import {Type} from "../data.js";

export default ({product}) => (
  <article className={
    `product ${
      product.type === Type.SALE
        ? `product--sale`
        : product.type === Type.NEW
          ? `product--new`
          : product.type === Type.BESTSELLER
            ? `product--bestseller`
            : ``
    }`
  }>
    {product.type && <mark>{product.type}</mark>}
    <h3><a href="#">{product.title || `Артикул ${product.id}`}</a></h3>
    <p>{product.price} ₽</p>
  </article>
);
Давайте так и сделаем. Передадим конкретный className и остальные пропсы как есть.

Чтобы передать пропсы «как есть», исползуем spread-оператор.