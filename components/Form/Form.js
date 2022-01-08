/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router';

export default function Form(props) {

    const history = useHistory();

    const [form, setForm] = useState({
        Email: "",
        Password: "",
    });

    const [formValidation, setFormValidation] = useState({
        isEmail: false,
        isPassword: false
    });

    const [formErros, setFormErros] = useState({
        EmailErr: null,
        PasswordErr: null
    });

    const formHandler = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        const emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        switch (name) {
            case "Email":
                setForm({
                    ...form,
                    Email: val,
                });
                setFormErros({
                    ...formErros,
                    EmailErr: val.length === 0 ? "This field is required" : !emailReg.test(val) ? "This is not Email" : null
                });
                setFormValidation({
                    ...formValidation,
                    isEmail: emailReg.test(val) ? true : false
                });
                break;
            case "Password":
                setForm({
                    ...form,
                    Password: val,
                });
                setFormErros({
                    ...formErros,
                    PasswordErr: val.length === 0 ? "This field is required" : val.length < 8 ? "Password must be 8 chars at least" : null
                });
                setFormValidation({
                    ...formValidation,
                    isPassword: val.length >= 8 ? true : false
                });
                break;
            default:
                break;
        }
    }

    const submit = () => {
        props.login(form);
        history.push('/');
    }

    return (

        <>
            <h1>Login</h1>
            <div className="w-25 mx-auto mt-5">
                <input placeholder="Email" value={form.Email} name="Email" className="form-control my-3" onChange={formHandler} autoComplete="disabled" />
                <span className="text-danger">{formErros.EmailErr}</span>
                <input type="Password" placeholder="Password" value={form.Password} name="Password" className="form-control my-3" onChange={formHandler} />
                <span className="text-danger">{formErros.PasswordErr}</span>
                <button type="submit" disabled={!formValidation.isEmail || !formValidation.isPassword} className="btn btn-primary w-100 mt-3" onClick={submit}>Login</button>
            </div>
        </>
    )
}
