import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux'

function Protected() {
    const navigate = useNavigate();
    const isAuth = useSelector((state)=>{
        // console.log(state.LoginData.LoginData.isAuthUser)
        // return state.LoginData.LoginData.isAuthUser
})
   
    useEffect(() => {
        let token = localStorage.getItem("token")

        if (!token) {
            navigate('/')
        }
        else if(token){
            navigate('/homePage')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth])


    return (
        <Outlet />
    )
}

export default Protected