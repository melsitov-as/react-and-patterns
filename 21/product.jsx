export default ({className, product}) => (
  <article className={`product ${className}`}>
    {product.type && <mark>{product.type}</mark>}
    <h3><a href="#">{product.title || `Артикул ${product.id}`}</a></h3>
    <p>{product.price} ₽</p>
  </article>
);
В самом компоненте продукта мы можем удалить условия для className и просто получать его снаружи.