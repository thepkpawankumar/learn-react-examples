import { useCounter } from "./hooks/useCounter";
import { useIsOnline } from "./hooks/useIsOnline";
import { useFormInput } from "./hooks/useFormInput";

function App() {

  const counter = useCounter();
  const isOnline = useIsOnline();
  

  /**
   * Using const with useState will not work in case of count++ or ++count
   * As count++ and ++count assign value back to variable and since count is constant
   * so it will throw an error "Assignment to constant variable"
   * If you change const to let then it will work but in case of count++
   * Counter will be updated by clicking twice on the button
   * As count++ will first assign the value to count, since initially count is 0 so
   * it will assign 0 to state and then increment the count, so state doesn't change and on next click
   * since count is 1 now so 1 is assigned to state and then it is incremented by 1, hence it took 2 click
   * to update the actual value, we can use ++count to resolve it
   * but recommended way is we should use const for state initialization and then use count+1 to increment the actual counter
   */

  const firstNameProps = useFormInput();
  const lastNameProps = useFormInput();

  return (
    <div className="App">
     {isOnline ? "Online": "Offline"}
     {counter}

      First Name: <input type="text" value={firstNameProps.value} onChange={firstNameProps.handleValueChange} />
      Last Name: <input type="text" value={lastNameProps.value} onChange={lastNameProps.handleValueChange} />

      Name: {firstNameProps.value} {lastNameProps.value}
    
    </div>
  );
}

export default App;
