const Instructions = ({ title, steps }) => (
  <section className="instructions">
    <h2>{title}</h2>
    <ul>
      {steps.map((step, i) => {
        return <li key={i}>{step}</li>;
      })}
    </ul>
  </section>
);

export default Instructions;
