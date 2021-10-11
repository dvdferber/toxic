import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {isUserAndPasswordValid} from '../Data/LoginStaffUtils'


export default function LogIn(){

    const history = useHistory()
    const [userInput, setUserInput] = useState({userName: '', password: ''})

    const heandalSubmit = (e)=>{
        e.preventDefault()
        let resp = isUserAndPasswordValid(userInput.userName, userInput.password)
        resp.then(data => {
            localStorage.setItem('id', data)
            history.push(
                {
                    pathname: '/main',
                    id: data
                })
        })
        .catch()
    }

    return(
        <div style={{border: '2px solid black'}}>
            <h1 >LogIn</h1>
            <form onSubmit={heandalSubmit}>
                <div>
                    <label>User name</label>
                    <input type='text' onChange={e => {setUserInput({...userInput, userName: e.target.value})}}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' onChange={e => {setUserInput({...userInput, password: e.target.value})}}/>
                </div>
                <div>
                    <input type='submit' value='submit'/>
                </div>

            </form>
            <div>
                <span>dont have an acount ?</span>
                <Link to='/create-account'>create account</Link>
            </div>
        </div>
    )
}