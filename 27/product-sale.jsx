import Product from "./product.jsx";

export default (props) => {
  const {className = ``, ...restProps} = props;

  return (
    <Product
      className={`product--sale ${className}`}
      {...restProps}
    />
  );
};
