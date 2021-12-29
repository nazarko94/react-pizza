import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../componets";

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={["Мясні", "Вегетаріанські", "Гриль", "Гострі", "Закриті"]}
        />
        <SortPopup items={[
        {name: "популярності", type: "popular"}, 
        {name: "ціні", type: "price"}, 
        {name: "алфавіту", type: "alphabet"}
        ]} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
