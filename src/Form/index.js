import { useState } from "react";
import { currencies } from "../currencies";
import Result from "../Result";
import { Fieldset, StyledForm, Legend, Label, LabelText, Input, Select, Button } from "./styled";


const Form = ({ calculateResult, result }) => {
   const [amount, setAmount] = useState("");
   const onInputChange = ({ target }) => setAmount(target.value);
   const [currency, setCurrency] = useState(currencies[0].short);
   const onSelectChange = ({ target }) => setCurrency(target.value);
   
   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);
   };
   return (
      <StyledForm
         onSubmit={onFormSubmit}
      >
         <Fieldset>
            <Legend className="form__legend">
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
                  {currencies.map((currency => (
                     <option
                        key={currency.short}
                        value={currency.short}
                     >
                        {currency.name}
                     </option>
                  )))};
                  
               </Select>
            </Label>

         </Fieldset>
         <p><Button>Przelicz</Button></p>
                 
         <Result
            result={result}
         />
      </StyledForm>
   );
};

export default Form;