import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import Result from "../Result";


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
      <form
         className="form"
         onSubmit={onFormSubmit}
      >
         <fieldset className="form__fieldset">
            <legend className="form__legend">
               Wprowadź kwotę do przeliczenia
            </legend>

            <label>
               <span className="form__labelText">
                  Mam*:
               </span>
               <input 
                  value={amount} 
                  onChange={onInputChange} 
                  className="form__field" 
                  type="number" 
                  min="1" 
                  step="any" 
                  placeholder="kwota w PLN" 
                  required 
               />
               
            </label>

            <label>
               <span className="form__labelText">
                  Przeliczam na*:
               </span>
               <select 
                  value={currency} 
                  className="form__field" 
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
                  
               </select>
            </label>

         </fieldset>
         <p><button className="form__button">Przelicz</button></p>
         
         <Result
            result={result}
         />
      </form>
   );
};

export default Form;