import { useState } from "react";

export function useCounter({initiaValue = 0}) {
    const [counter, setCounter] = useState(initiaValue);

    const counterIncrement = () => {
        setCounter(i => i + 1)
    }

    const counterDecrement = () => {
        setCounter(d => d - 1)
    }

    const counterReset = () => {
        setCounter(initiaValue)
    }

    return{
        counter: counter,
        onIncrement: counterIncrement,
        onDecrement: counterDecrement,
        onReset: counterReset
    }
}