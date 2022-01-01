import { useContext } from 'react'
import { Counter } from "../../ContextCounterConfig";

export default function ContextCounterCom() {

    let { contextCounter, setContextCounter } = useContext(Counter)

    const minus = () => {
        contextCounter--;
        setContextCounter(contextCounter);
    }

    const plus = () => {
        contextCounter++;
        setContextCounter(contextCounter);
    }

    return (
        <>
            <h1>Counter Using Context</h1>
            <div className="border p-5 w-50 mx-auto mt-5">
                <p>Count {contextCounter}</p>
                <div className="d-flex justify-content-center mt-5">
                    <button disabled={contextCounter === 0} className="btn btn-danger mr-2" onClick={minus}>-</button>
                    <button className="btn btn-success ml-2" onClick={plus}>+</button>
                </div>
            </div>
        </>
    )
}
