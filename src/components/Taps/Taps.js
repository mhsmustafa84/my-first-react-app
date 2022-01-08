import React from 'react';
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Tab1 from './Tap1';
import Tab2 from './Tap2';


export default function Taps() {
    const { push } = useHistory();
    return (
        <div className="container">
            <h1 className="mb-5">Tabs using nested routes</h1>
            <button
                className="btn btn-secondary m-2"
                onClick={() => push("/my-first-react-app/tabs/tab1")}
            >
                Tab 1
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={() => push("/my-first-react-app/tabs/tab2")}
            >
                Tab 2
            </button>
            <Route path="/my-first-react-app/tabs/tab1" exact component={Tab1} />
            <Route path="/my-first-react-app/tabs/tab2" exact component={Tab2} />
        </div>
    )
}
