import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, Route } from 'react-router-dom';
import { count } from './../../Store/actions';
import { Switch } from 'react-router-dom';
import Test from '../test/Test';
import Test2 from './../test2/Test2';

export default function Counter() {

    let counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const minus = () => {
        counter > 0 && counter--;
        dispatch(count(counter));
    }

    const plus = () => {
        counter++;
        dispatch(count(counter));
    }

    return (
        <>
            <h1>Counter Using Redux Store</h1>
            <div className="border p-5 w-50 mx-auto mt-5 bg-light">
                <p>Count {counter}</p>
                <div className="d-flex justify-content-center mt-5">
                    <button disabled={counter === 0} className="btn btn-danger mr-2" onClick={minus}>-</button>
                    <button className="btn btn-success ml-2" onClick={plus}>+</button>
                </div>
            </div>
            <Link className="m-3" to="/counter/test">first</Link>
            <Link to="/counter/test2">second</Link>
            <Switch>
                <Route path="/counter/test" exact>
                    <Test />
                </Route>
                <Route path="/counter/test2" exact>
                    <Test2 />
                </Route>
            </Switch>
        </>
    )
}
