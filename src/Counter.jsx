import { useCounter } from "./useCounter";

export function CounterHandle({initiaValue = 0}) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initiaValue);

    return (
        <div>
            <h1 onChange={CounterHandle}>Count: {counter}</h1>
            <button onClick={onIncrement}>Add</button>
            <button onClick={onDecrement}>Subtract</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}