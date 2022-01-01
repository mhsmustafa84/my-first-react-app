import App from './App';
import { CounterProvider } from "./ContextCounterConfig";
import { useState } from 'react';


export default function App2() {

    const [contextCounter, setContextCounter] = useState(0);

    return (
        <>
            <CounterProvider value={{ contextCounter, setContextCounter }}>
                <App />
            </CounterProvider>
        </>
    )
}
