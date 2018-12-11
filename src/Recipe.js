import IngredientList from "./IngredientList";
import Instructions from "./Instructions";

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
};

export default Recipe;
