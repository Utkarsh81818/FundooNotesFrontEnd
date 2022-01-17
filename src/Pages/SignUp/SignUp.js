/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import './SignUp.css';
import TextField from '@mui/material/TextField';
import { Register } from '../../Services/userService';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import image from '../../download.png'
const emailRegex = /^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}/;

const SignUp = () => {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [regexObj, setRegexObj] = React.useState({ firstNameBorder: false, lastNameBorder: false, emailBorder: false, paasswordBorder: false })
    const [regexhelpertext, sethelpertext] = React.useState({ firstNameHelperText: "", lastNameHelperText: "", emailHelperText: "", passwordHelperText: "" })

    const getMail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const getFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const getLastName = (e) => {
        setLastName(e.target.value)
    }
    const submit = () => {
        if (email === "" && password === "" && firstName === "" && lastName === "") {
            setRegexObj({ ...regexObj, firstNameBorder: true, lastNameBorder: true, emailBorder: true, passwordBorder: true })
            sethelpertext({ ...regexhelpertext, firstNameHelperText: "Enter a correct First Name", lastNameHelperText: "Enter a correct Last Name", emailHelperText: "Enter correct email", passwordHelperText: "Enter correct password" })
        }
        else {
            const firstNameValidPattern = firstNameRegex.test(firstName)
            const lastNameValidPattern = lastNameRegex.test(lastName)
            const emailValidPattern = emailRegex.test(email)
            const passwordValidPattern = passRegex.test(password)
            console.log("12", firstNameValidPattern);
            console.log("22", lastNameValidPattern);
            console.log("33", emailValidPattern);
            console.log("44", passwordValidPattern);
            if (firstNameValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    firstNameBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    firstNameHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    firstNameBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    firstNameHelperText: "Enter the correct first name"
                }))
            }
            if (emailValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    emailHelperText: "Sorry, your username must be between 6 and 30 characters long"
                }))
            }
            if (passwordValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passwordBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passwordBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    passwordHelperText: "Enter the correct password"
                }))
            }
            if (lastNameValidPattern) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    lastNameBorder: false
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    lastNameHelperText: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    lastNameBorder: true
                }));
                sethelpertext(regexhelpertext => ({
                    ...regexhelpertext,
                    lastNameHelperText: "Enter the correct lastname"
                }))
            }

            if (emailValidPattern === true && passwordValidPattern === true && firstNameValidPattern === true && lastNameValidPattern === true) {
                let obj = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password
                }

                Register(obj).then((res) => {
                    console.log(res)
                })
                    .catch((err) => {
                        console.log(err)
                    })
                console.log(obj);
            }
        }
    }
    return (
        <div className="Box-class">
            <div className="container">
                <div className="form-class">
                    <div className='google'>
                        <span className='first'>G</span>
                        <span className='second'>o</span>
                        <span className='third'>o</span>
                        <span className='four'>g</span>
                        <span className='five'>l</span>
                        <span className='Six'>e</span>
                    </div>
                    <div className='heading'>
                        <p>Create Your Google account</p>
                    </div>
                    <div className='name'>
                        <div className='firstname'>
                            <TextField id="Name" onChange={getFirstName} error={regexObj.firstNameBorder} helperText={regexhelpertext.firstNameHelperText} label="First name" size='small' variant="outlined" />
                        </div>
                        <div className='lastname'>
                            <TextField id="Lastname" onChange={getLastName} error={regexObj.lastNameBorder} helperText={regexhelpertext.lastNameHelperText} label="Last name" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='email'>
                        <TextField id="email" onChange={getMail} error={regexObj.emailBorder} helperText={regexhelpertext.emailHelperText} label="Username" size='small' variant="outlined" />
                    </div>
                    <div className='textarea'>
                        You can use letters, numbers & periods
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                            <TextField id="password" onChange={getPassword} error={regexObj.passwordBorder} helperText={regexhelpertext.passwordHelperText} label="Password" size='small' variant="outlined" />
                        </div>
                        <div className='confirm'>
                            <TextField id="confirm" label="Confirm" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='meta-text'>
                        Use 8 or more characters with a mix of letters,numbers,
                        symbols
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" id="Show password" name="Show password" value="box"></input>
                        <label for="Show password">  Show password</label>
                    </div>
                    <div className='button'>
                        <div className='link'>
                            <h4><a href='sign'>SignIn Instead</a></h4>
                        </div>
                        <div className="button-end">
                            <Button onClick={submit} variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class">
                    <img src={image} ></img>
                </div>
            </div>
        </div>
    )
}

export default SignUp