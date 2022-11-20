import { useState } from "react";
import Result from "../Result";
import {
   Fieldset,
   StyledForm,
   Legend,
   Label,
   LabelText,
   Input,
   Select,
   Button,
   Loading,
   Failure,
   Info
} from "./styled";
import { useApiData } from "../useApiData";

const errorText = <span>Ups... coś poszłonie tak 😒<br />
   Sprawdż połączenie internetowe!<br />Jeżeli połączenie jest OK to może nasza wina 🤷‍♂️<br />Spróbuj za jakiś czas.</span>;

const loadingText = <span>🕧 Chwilka...<br />🔨 Pobieramy kusy walut z Europejskiego Banku Centralnego.</span>;

const Form = () => {
   const [result, setResult] = useState();
   const ratesData = useApiData();

   const calculateResult = (currency, amount) => {
      const rate = ratesData.rates[currency];

      setResult({
         sourceAmount: +amount,
         targetAmount: amount * rate,
         currency,
      });
   };

   const currenciesDate = ratesData.date;
   const [amount, setAmount] = useState("");
   const onInputChange = ({ target }) => setAmount(target.value);
   const [currency, setCurrency] = useState("EUR");
   const onSelectChange = ({ target }) => setCurrency(target.value);

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);
   };
   return (
      <StyledForm
         onSubmit={onFormSubmit}
      >
         {ratesData.state === "loading"
            ? (
               <Loading>
                  {loadingText}
               </Loading>
            )
            : (
               ratesData.state === "error"
                  ? (
                     <Failure>
                        {errorText}
                     </Failure>
                  ) : (
                     <>
                        <Fieldset>
                           <Legend>
                              Wprowadź kwotę do przeliczenia
                           </Legend>

                           <Label>
                              <LabelText>
                                 Mam*:
                              </LabelText>
                              <Input
                                 value={amount}
                                 onChange={onInputChange}
                                 type="number"
                                 min="1"
                                 step="any"
                                 placeholder="kwota w PLN"
                                 required
                              />

                           </Label>

                           <Label>
                              <LabelText>
                                 Przeliczam na*:
                              </LabelText>
                              <Select
                                 value={currency}
                                 type="select"
                                 required
                                 onChange={onSelectChange}
                              >
                                 {Object.keys(ratesData.rates).map(((currency) => (
                                    <option
                                       key={currency}
                                       value={currency}
                                    >
                                       {currency}
                                    </option>
                                 )))};

                              </Select>
                           </Label>

                        </Fieldset>

                        <p><Button>Przelicz</Button></p>

                        <Info>Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />
                           Z dnia <strong>{currenciesDate}</strong>
                        </Info>

                        <Result result={result} />
                     </>
                  )
            )}
      </StyledForm>
   );
};

export default Form;