/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

import List from './components/List/List';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/Product';
import React, { Component, lazy } from 'react';
import Books from './components/Books/Books';
import Counter from './components/Counter/Counter';
import Cart from './components/Cart/Cart';
import ContextCounterCom from './components/ContextCounterCom/ContextCounterCom';
import RTProducts from './components/RTProducts/RTProducts';
import Form from './components/Form/Form';
import Test from "./components/test/Test";
// const LazyForm = lazy(() => import( './components/Form/Form'));
export default class App extends Component {
    constructor() {
        // console.log("app constructor");
        super();
        this.state = {
            isLogin: false,
            Email: '',
            Password: ''
        }
    }

    componentDidMount() {
        // console.log("app didMount");
    }
    componentDidUpdate() {
        // console.log("app didUpdate");
    }

    login = (formValues) => {
        if (this.state.isLogin) {
            this.setState({
                isLogin: false,
                Email: '',
                Password: ''
            });
        } else {
            this.setState({
                isLogin: true,
                Email: formValues.Email,
                Password: formValues.Password
            });
        }
    }

    render() {
        // console.log('app render');
        return (
            <>
                <div className="text-center">

                    <BrowserRouter>
                        <NavBar isLogin={this.state.isLogin} login={this.login} user={this.state.Email} />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            {
                                !this.state.isLogin &&
                                <Route path="/login" exact>
                                    <Form login={this.login} />
                                </Route>
                            }
                            {
                                this.state.isLogin &&
                                <Switch>
                                    <Route path="/list" exact component={List} />
                                    <Route path="/products" exact component={Products} />
                                    <Route path="/redux-thunk-products" exact component={RTProducts} />
                                    <Route path="/products/:id" exact component={Product} />
                                    <Route path="/books" exact component={Books} />
                                    <Route path="/counter" exact component={Counter} />
                                    <Route path="/counter/test" exact>
                                        <Counter />
                                    </Route>
                                    <Route path="/counter/test2" exact>
                                        <Counter />
                                    </Route>
                                    <Route path="/context-counter" exact component={ContextCounterCom} />
                                    <Route path="/cart" exact component={Cart} />
                                </Switch>
                            }
                            <Route path="*" exact component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </>
        )
    }
}
