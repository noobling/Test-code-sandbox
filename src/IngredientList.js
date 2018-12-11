import Ingredient from "./Ingredient";

const IngredientList = ({ list }) => (
  <ul className="ingredients">
    {list.map((ingredient, i) => {
      return <Ingredient key={i} {...ingredient} />;
    })}
  </ul>
);

export default IngredientList;
