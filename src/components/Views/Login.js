import React from 'react';
import '../style/login.css';
import {handleInputChange, get_Internal_User_Login_Token} from '../../redux/Actions/LoginActions'
import {useDispatch, useSelector} from 'react-redux'
const {REACT_APP_BASEURL} = process.env;
console.log(REACT_APP_BASEURL)

function Login() {
    const dispatch = useDispatch();

    const login_Data = useSelector((state) => state.LoginData.LoginData)
    console.log(login_Data)
  
    return (
        <>
            <header style={{height:'10%'}}>
                <img src="images/logo.png" alt="logo" />
            </header>
            <div className="login-box"> 
                <div className="login-left-box" style={{height:'90vh'}} >
                </div>

                <div className="login-right-box">
                    <div className="container">
                   
                        <div className="row">
                                <div className="col">
                                <h3>Sign In</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="email" onChange={(e)=>dispatch(handleInputChange(e))} placeholder="User Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="password" onChange={(e)=>dispatch(handleInputChange(e))} placeholder="Password" />
                                </div>
                            </div>                        
                                <button type="submit" onClick={()=>dispatch(get_Internal_User_Login_Token(login_Data))} >Sign In</button>
                          
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login