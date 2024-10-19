import AuthStyles from  './auth.module.css'
import LoginImg from '../../assets/signup-BJI-YnLt.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {
    const [viewPassword, setViewPassword] = useState(false)

    const [LoginData, setLoginData] = useState({
        email : "",
        password : "",
    })

    console.log(LoginData)

    const iconStyle = {
        position : 'absolute',
        right : '20px',
        top : '50px',
        fontSize : '1.4rem'
      } 
    

  return (
    <div className={AuthStyles.authlogin}>
        <div className={AuthStyles.loginContainer}>
            <div className={AuthStyles.loginWrap}>
                <div className={AuthStyles.loginLeft}>
                    <div className={AuthStyles.leftWrapper}>
                        <div className={AuthStyles.leftHeader}>
                            <i className='bi bi-chat-fill' style={{fontSize : '2.3rem'}}></i>
                            <h1>We-Chat</h1>
                        </div>

                        <div className="left-wel-mes">
                            <h3>Hey there 👋, Welcome Back. Login to chat with your friends & colleagues</h3>
                        </div>

                        <div className="left-image">
                            <img src={LoginImg} alt="login image" />
                        </div>
                    </div>
                </div>

                <div className={AuthStyles.appLine}></div>

                <div className={AuthStyles.loginRight}>
                    <div className={AuthStyles.loginrightform}>
                        <form>
                            <div className={AuthStyles.loginform}>
                                <div className={AuthStyles.formhead}>
                                    <div className="sm-head" style={{color:'#cccccc88'}}>
                                        <p>Start For Free</p>
                                    </div>

                                    <div className={AuthStyles.bghead}>
                                        <h2>Login to We-Chat</h2>
                                    </div>
                                </div>

                                <div className={AuthStyles.formi}>
                                    <div className={AuthStyles.actualform}>
                                        <div className={AuthStyles.finputs}>
                                            <div className={AuthStyles.inputs}>
                                                <div className={`email ${AuthStyles.o}`}>
                                                    <label htmlFor="email">Email</label>
                                                    <input 
                                                    type="email" 
                                                    name='email' 
                                                    value={LoginData.email} 
                                                    id='email' 
                                                    onChange={(e) => {
                                                        setLoginData((currentValue) => ({
                                                            ...currentValue, email : e.target.value
                                                        }))
                                                    }} 
                                                    />
                                                    <i className='bi bi-envelope' style={iconStyle}></i>
                                                </div>

                                                <div className={`password ${AuthStyles.o}`}>
                                                    <label htmlFor="password">Password</label>
                                                    <input 
                                                    type={viewPassword ? 'text' : 'password'} 
                                                    name='password' 
                                                    value={LoginData.password} 
                                                    id='password' 
                                                    onChange={(e) => {
                                                        setLoginData((currentValue) => ({
                                                            ...currentValue, password : e.target.value
                                                        }))
                                                    }}
                                                    />
                                                    <i className='bi bi-lock' style={iconStyle}></i>
                                                </div>
                                            </div>

                                            <div className={AuthStyles.slayer}>
                                                <div className={AuthStyles.viewpassword}>
                                                    <div className={AuthStyles.slide}>
                                                        <input type="checkbox" name="viewPassword" id="view" hidden />
                                                        <label onClick={() => {
                                                            setViewPassword(!viewPassword)
                                                        }} htmlFor="view"></label>
                                                    </div>

                                                    <div className="s-text">
                                                        <p>Show Password</p>
                                                    </div>
                                                </div>

                                                <div className={AuthStyles.fpassword}>
                                                    <span>Forgotten Password ?</span>
                                                    <Link to='/reset-password'>Reset</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={AuthStyles.sub}>
                                            <div className={AuthStyles.loginbutton}>
                                                <button>Sign In</button>
                                            </div>

                                            <div className={AuthStyles.registerp}>
                                                <span>Don&apos; have an account ?</span>
                                                <Link to='/auth/register'>Register</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
