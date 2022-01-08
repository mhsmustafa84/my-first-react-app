/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import List from './components/List/List';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/Product';
import Books from './components/Books/Books';
import Counter from './components/Counter/Counter';
import Cart from './components/Cart/Cart';
import ContextCounterCom from './components/ContextCounterCom/ContextCounterCom';
import RTProducts from './components/RTProducts/RTProducts';
import Form from './components/Form/Form';
import Taps from './components/Taps/Taps';
import './App.css';

export default class App extends Component {
    constructor() {
        // console.log("app constructor");
        super();
        const user = JSON.parse(localStorage.getItem("user"));
        this.state = user ? user : {
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
        const user = {
            isLogin: true,
            Email: formValues.Email,
            Password: formValues.Password
        }
        this.setState(user);
        localStorage.setItem("user", JSON.stringify(user));
    }

    render() {
        // console.log('app render');
        return (
            <div className="text-center">
                <BrowserRouter>
                    <NavBar isLogin={this.state.isLogin} user={this.state.Email} />
                    {
                        this.state.isLogin ?
                            <Switch>
                                <Route path="/my-first-react-app" exact component={Home} />
                                <Route path="/my-first-react-app/list" exact component={List} />
                                <Route path="/my-first-react-app/products" exact component={Products} />
                                <Route path="/my-first-react-app/redux-thunk-products" exact component={RTProducts} />
                                <Route path="/my-first-react-app/products/:id" exact component={Product} />
                                <Route path="/my-first-react-app/books" exact component={Books} />
                                <Route path="/my-first-react-app/counter" exact component={Counter} />
                                <Route path="/my-first-react-app/tabs" component={Taps} />
                                <Route path="/my-first-react-app/context-counter" exact component={ContextCounterCom} />
                                <Route path="/my-first-react-app/cart" exact component={Cart} />
                                <Route path="*" exact component={NotFound} />
                            </Switch>
                            :
                            <Switch>
                                <Route path="/my-first-react-app" exact component={Home} />
                                <Route path="/my-first-react-app/login" exact>
                                    <Form login={this.login} />
                                </Route>
                                <Route path="*" exact component={NotFound} />
                            </Switch>
                    }
                </BrowserRouter>
            </div >
        )
    }
}
