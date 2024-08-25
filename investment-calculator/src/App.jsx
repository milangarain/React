import { useState } from "react"
import Header from "./components/Header"
import InvestmentInput from "./components/InvestmentInput"
import InvestmentResult from "./components/InvestmentResult"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 1000,
    annualInvestment: 200,
    expectedReturn: 6,
    duration: 8
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInfo => {
      return {
        ...prevUserInfo,
        [inputIdentifier] : +newValue
      }
    });
  } 

  let isValidInput = userInput.duration > 0;
  return (
    <>
      <Header />
      <InvestmentInput investmentInput={userInput} onChange={handleChange}/>
      {isValidInput && <InvestmentResult investmentInput={userInput}/>}
      {!isValidInput && <p>Please enter a valid duration.</p>}
    </>
    
  )
}

export default App
