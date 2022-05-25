const isMobile = true; // Какое-то жуткое вычисление мобильных на JavaScript

export default (props) => (
  <header>
    {props.render(isMobile)}
  </header>
);

