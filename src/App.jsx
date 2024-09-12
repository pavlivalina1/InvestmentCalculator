import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./assets/util/investment";

const INITIAL_INPUT = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);

  const isInputValid =
    userInput.duration >= 1 &&
    userInput.initialInvestment > 0 &&
    userInput.annualInvestment > 0 &&
    userInput.expectedReturn > 0;

  function handleInputChange(inputField, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputField]: +value,
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onInputChange={handleInputChange} />
      {isInputValid && <Results userInput={userInput} />}
      {!isInputValid && (
        <p className="center">Enter valid data for calculations!</p>
      )}
    </>
  );
}

export default App;
