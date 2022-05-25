import Product from "./product.jsx";

export default (props) => {
  const {className = ``, ...restProps} = props;

  /*
    Вариант ES5, чтобы не ругался линтер,
    и работало во всех браузерах:
    const {className = ``} = props;
    const restProps = Object.assign({}, props);
    delete restProps.className;
  */

  return (
    <Product
      className={`product--new ${className}`}
      {...restProps}
    />
  );
};
