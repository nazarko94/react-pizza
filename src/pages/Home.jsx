import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock } from "../componets";

import { setCategory } from "../redux/actions/filters";

const categoryNames = ["Мясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"];
const sortItems = [
  { name: "популярності", type: "popular" },
  { name: "ціні", type: "price" },
  { name: "алфавіту", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
    }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
