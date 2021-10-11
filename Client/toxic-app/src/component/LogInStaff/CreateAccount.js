import { useState } from "react";
import { useHistory } from "react-router-dom"
import {createNewUser } from '../Data/LoginStaffUtils'


export default function CreateAccount(){

    const [userInput, setUserInput] = useState({userName: '', password: ''})
    const history = useHistory()


    const heandalSubmit = async(e)=>{
        e.preventDefault()
        if(userInput.password ===  userInput.confirmPassword){
            let newUser = await createNewUser(userInput)
            if(newUser){
                history.push('/')
            }
        }
     
    }

    return(
        <div style={{border: "2px solid black"}}>
            <h1>CreateAccount</h1>
            <form onSubmit={heandalSubmit}>
                <div>
                    <label>full name</label>
                    <input type='text' onChange={e => {setUserInput({...userInput, name: e.target.value})}}/>
                </div>
                <div>
                    <label>User name</label>
                    <input type='text' onChange={e => {setUserInput({...userInput, userName: e.target.value})}}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' onChange={e => {setUserInput({...userInput, email: e.target.value})}}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' onChange={e => {setUserInput({...userInput, password: e.target.value})}}/>
                </div>
                <div>
                    <label>confirm Password</label>
                    <input type='password' onChange={e => {setUserInput({...userInput, confirmPassword: e.target.value})}}/>
                </div>
                <div>
                    <label>desctption</label>
                    <input type='text' onChange={e => {setUserInput({...userInput, desctption: e.target.value})}}/>
                </div>
                <div>
                    <input type='submit' value='submit'/>
                </div>

            </form>
        </div>
    )
}