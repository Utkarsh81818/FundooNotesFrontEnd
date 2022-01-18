/* eslint-disable no-unused-vars */
import React from "react";
import './Signin.css';
import { login } from '../../../src/Services/userService';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const emailRegex = /^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

function Signin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [regexobj, setregexobj] = React.useState({ emailborder: false, passwordborder: false })
    const [regexhelpertext, setregexhelpertext] = React.useState({ emailhelpertext: "", passwordhelpertext: "" })
    const takeEmail = (e) => {
        setEmail(e.target.value);
    }
    const takePassword = (e) => {
        setPassword(e.target.value);
    }
    const submit = () => {
        if (email === "" && password === "") {
            setregexobj({ ...regexobj, emailborder: true, passwordborder: true })
            setregexhelpertext({ ...regexhelpertext, emailhelpertext: "Enter a correct Email", passwordhelpertext: "Enter a valid password" })
            console.log(regexobj);
        }
        else {
            const emailValidation = emailRegex.test(email)
            console.log(emailValidation);
            const passwordValidation = passRegex.test(password)
            if (emailValidation) {
                setregexobj(regexobj => ({
                    ...regexobj,
                    emailborder: false
                }));
                console.log("11", regexobj);
                setregexhelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailhelpertext: ""
                }))
            }
            else {
                setregexobj(regexobj => ({
                    ...regexobj,
                    emailborder: true
                }));
                console.log("12", regexobj);
                setregexhelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailhelpertext: "Enter the correct email"
                }))
            }
            if (passwordValidation) {
                setregexobj(regexobj => ({
                    ...regexobj,
                    passwordborder: false
                }));
                console.log(regexobj);
                setregexhelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordhelpertext: ""
                }))
            }
            else {
                setregexobj(regexobj => ({
                    ...regexobj,
                    passwordborder: true
                }));
                console.log(regexobj);
                setregexhelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordhelpertext: "Enter the corret password"
                }))
            }
            if (emailValidation === true && passwordValidation === true) {
                let obj = {
                    "email": email,
                    "password": password
                }

                login(obj).then((res) => {
                    if (!res) {
                        console.log(res);
                    }
                    console.log(res)
                    console.log(res.data.data)
                    localStorage.setItem("Token : ", res.data.data)
                }).catch((err) => {
                    console.log(err)
                })
                console.log(obj);
            }
        }
    }
    return (
        <div className="Container">
            <div className="form">
                <div className='header'>
                    <span className='first'>G</span>
                    <span className='second'>o</span>
                    <span className='third'>o</span>
                    <span className='four'>g</span>
                    <span className='five'>l</span>
                    <span className='Six'>e</span>
                </div>
                <div className='sign'>
                    <h2>Sign In</h2>
                </div>
                <div className='use'>
                    <h5>Use Your Google Account</h5>
                </div>
                <div className='emailOne'>
                    <TextField id="Email" onChange={takeEmail} helperText={regexhelpertext.emailhelpertext} error={regexobj.emailborder} label="Email or Phone" size='small' variant="outlined" />
                </div>
                <div className="password">
                    <TextField id="password" onChange={takePassword} helperText={regexhelpertext.passwordhelpertext} error={regexobj.passwordborder} label="Password" size='small' variant="outlined" />
                </div>
                <div className='textletter'>
                    Not your computer? Use Guest mode to sign in privately.</div>
                <div className='account'>
                    <h2 className='accountcolor'><a id="GFG" href='SignIn.css'>Create account</a></h2>
                    <div className='button'>
                        <Button onClick={submit} variant="contained">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin