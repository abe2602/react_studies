import React, {useState} from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
        
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div className="counter-container">
            <p className="counter-display ">{counter}</p>
            <div>
            <button className="counter-button"  onClick={decreaseCounter}>Decrease</button>
            <button className="counter-button"  onClick={resetCounter}>Reset</button>
            <button className="counter-button" onClick={increaseCounter}>Increase</button>
            </div>
        </div>
    )
}

export default Counter