import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import { currencies } from "./currencies";
import Clock from "./Clock";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Header
        title="Kalkulator walut"
      />
      <Clock />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
};

export default App;
