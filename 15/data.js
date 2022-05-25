const Type = {
    SALE: `Сейл`,
    NEW: `Нью`,
    BESTSELLER: `Топ продаж`
  };
  
  const products = [
    {
      id: 0,
      title: `Пищалка`,
      price: `500`,
      type: Type.SALE
    },
    {
      id: 1,
      title: `Дразнилка`,
      price: `5`,
      type: Type.NEW
    },
    {
      id: 2,
      title: `Лежанка`,
      price: `2400`,
      type: null
    }
  ];
  
  export {Type, products};
  