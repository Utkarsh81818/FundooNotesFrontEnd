import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../Pages/SignIn/Signin'
import SignUp from '../Pages/SignUp/SignUp'

const Router = () => {
    return (
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Signin}/>
                <Route path="/SignUp" component={SignUp}/>
                {/* <Route path="/Dashboard" component={Dashboard}/> */}

                    </Switch>
                    </BrowserRouter>
    )
}
export default Router