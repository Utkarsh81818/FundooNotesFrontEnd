/* eslint-disable no-unused-vars */
import React from "react";
import './Signin.css';
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
            const passwordValidation = passRegex.test(password)
            if (emailValidation && passwordValidation) {
                setregexobj({ ...regexobj, emailborder: false })
                setregexhelpertext({ ...regexhelpertext, emailhelpertext: "" })

                setregexobj({ ...regexobj, passwordborder: false })
                setregexhelpertext({ ...regexhelpertext, passwordhelpertext: "" })
                console.log(regexobj);
            }
            else {
                if (emailValidation && !passwordValidation) {
                    setregexobj({ ...regexobj, emailborder: false, passwordborder: true })
                    setregexhelpertext({ ...regexhelpertext, emailhelpertext: "", passwordhelpertext: "Enter a valid password" })
                    console.log(regexobj);
                }
                else if (!emailValidation && passwordValidation) {
                    setregexobj({ ...regexobj, emailborder: true, passwordborder: false })
                    setregexhelpertext({ ...regexhelpertext, emailhelpertext: "Enter a correct email", passwordhelpertext: "" })
                    console.log(regexobj);
                }
                else {
                    setregexobj({ ...regexobj, emailborder: true, passwordborder: true })
                    setregexhelpertext({ ...regexhelpertext, emailhelpertext: "Enter a valid email", passwordhelpertext: "Enter a valid password" })
                    console.log(regexobj);
                }
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
                    <div className='btm'>
                        <Button onClick={submit} variant="contained">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin