/* eslint-disable no-unused-vars */
import React from "react";
import './Signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

function Signin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [regexobj, setregexobj] = React.useState({emailborder:false, passwordborder:false})
    const [emailborder, setEmailborder] = React.useState(false)
    const [passwordborder, setPasswordborder] = React.useState(false)
    const takeEmail = (e) => {
        setEmail(e.target.value);
    }
    const takePassword = (e) => {
        setPassword(e.target.value);
    }
    const submit = () => {
        console.log(email,password);
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
                <div className='email'>
                    <TextField id="Email" onChange={takeEmail} error={regexobj.emailborder} label="Email or Phone" size='small' variant="outlined" />
                </div>
                <div className="password">
                <TextField id="password" onChange={takePassword} error={regexobj.passwordborder} label="Password" size='small' variant="outlined" />
                </div>
                <div className='textletter'>
                    Not your computer? Use Guest mode to sign in privately.</div>
                <div className='account'>
                    <h2 className='accountcolor'><a id = "GFG"href='SignIn.css'>Create account</a></h2>
                    <div className='btm'>
                        <Button onClick={submit} variant="contained">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin