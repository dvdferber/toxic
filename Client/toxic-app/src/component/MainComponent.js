import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LogIn from './LogInStaff/LogIn'
import CreateAccount from './LogInStaff/CreateAccount'
import MainPageContainer from './MainPage/MainPageContainer'


export default function MainComponent(){
    return(
        <div className='main'>
            <h1>Toxic App</h1>
            <h2>MainComponent</h2>
            <Switch>
                <Route exact path='/' component={LogIn} />
                <Route path='/create-account' component={CreateAccount} />
                <Route path='/main' component={MainPageContainer} />
            </Switch>
        </div>
    )
}