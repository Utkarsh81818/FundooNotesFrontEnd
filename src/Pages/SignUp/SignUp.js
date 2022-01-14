import React from "react";
import './SignUp.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const SignUp = () => {
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
                            <TextField id="Name" label="First name" size='small' variant="outlined" />
                        </div>
                        <div className='lastname'>
                            <TextField id="Lastname" label="Last name" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='email'>
                        <TextField id="email" label="Username" size='small' variant="outlined" />
                    </div>
                    <div className='textarea'>
                        You can use letters, numbers & periods
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                            <TextField id="password" label="Password" size='small' variant="outlined" />
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
                            <Button variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class">
                    <img src="Google-Fined-Banner.jpeg" ></img>
                </div>
            </div>
        </div>
    )
}

export default SignUp