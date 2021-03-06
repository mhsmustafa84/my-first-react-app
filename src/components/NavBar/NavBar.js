import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from 'react';
import { Counter } from "../../ContextCounterConfig";

export default function NavBar(props) {

    const counter = useSelector(state => state.counter)
    const cartItems = useSelector(state => state.cartItems)
    const { contextCounter } = useContext(Counter)

    const logOut = () => {
        localStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className={props.isLogin ? "container-fluid" : "container"}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mx-2">
                                <NavLink exact to="/my-first-react-app" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            {
                                props.isLogin &&
                                <>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/my-first-react-app/list" className="nav-link">
                                            To-Do-List
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/my-first-react-app/products" className="nav-link">
                                            Products
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/my-first-react-app/redux-thunk-products" className="nav-link">
                                            R-Products
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/my-first-react-app/books" className="nav-link">
                                            Books
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/my-first-react-app/counter" className="nav-link">
                                            R-Counter ({counter})
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/my-first-react-app/context-counter" className="nav-link">
                                            Context-Counter ({contextCounter})
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/my-first-react-app/tabs" className="nav-link">
                                            Tabs
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/my-first-react-app/cart" className="nav-link">
                                            Cart ({cartItems})
                                        </NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                        {
                            props.isLogin ?
                                <>
                                    <div className="float-right text-warning mr-4"><small className="text-success">Welcome</small> {props.user.split('@')[0]}</div>
                                    <Link to="/my-first-react-app" onClick={logOut} className="text-danger">
                                        Log Out
                                    </Link>
                                </>
                                :
                                <Link to="/my-first-react-app/login" className="text-white">
                                    Login
                                </Link>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}
