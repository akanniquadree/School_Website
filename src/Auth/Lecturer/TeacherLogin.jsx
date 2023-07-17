import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TeacherLogin.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

export default function TeacherLogin() {
    const[user, setUser] = useState("")
    const[password, setPassword] = useState("")

  return (
    <div className='body'>
        <div className="wrapper">
            <div className="leftBox">
            <LazyLoadImage className='loginImage' src={'https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-white_140725-18660.jpg?size=626&ext=jpg&ga=GA1.2.879595502.1686989991&semt=ais'}/>
            </div>
            <div className="loginPage">
                <h1> LOGIN</h1>
                <div className="form-group">
                    <label
                        htmlFor='userId'
                        className='label'>
                        User Id
                    </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="userId"
                        placeholder='2022000037'
                        value={user}
                        onChange={(e)=>setUser(e.target.value)}
                        /> 
                </div>
                <div className="form-group">
                    <label
                        htmlFor='password'
                        className='label'>
                        Password
                    </label>
                    <input 
                        className='inputBox' 
                        type="password"
                        name="matricNo"
                        placeholder='2022000037'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        /> 
                </div>
                <Button className='submit' variant='contained' color="primary"> Login</Button>
                <section>
                    <Link to="/teacherregister" className='register'> Register</Link>
                    <Link to="#" className='forgetPassword'> Forget Password?</Link>
                </section>
            </div>
        </div>
    </div>
  )
}