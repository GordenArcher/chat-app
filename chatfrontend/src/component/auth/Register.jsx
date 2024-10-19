import AuthStyles from './auth.module.css'
import RegisterImg from '../../assets/signup-BJI-YnLt.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
      const [registerData, setRegisterData] = useState({
        name : "",
        email : "",
        password : "",
        password2 : "",
      })

      const iconStyle = {
        position : 'absolute',
        right : '20px',
        top : '50px',
        fontSize : '1.4rem'
      } 

  return (
    <div className={AuthStyles.authRegister}>
      <div className={AuthStyles.registerWrapper}>
        <div className={AuthStyles.registerContainer}>
          <div className={AuthStyles.registerLeft}>
            <div className={AuthStyles.leftWrapper}>
              <div className={AuthStyles.leftHeader}>
                <i className='bi bi-chat-fill' style={{fontSize : '2.3rem'}}></i>
                <h1>We-Chat</h1>
              </div>

              <div className="left-wel-mes">
                  <h3>Join We-Chata & experience the modern way to connect with people</h3>
              </div>

              <div className="left-image">
                  <img src={RegisterImg} alt="register image" />
              </div>
            </div>            
          </div>

          <div className={AuthStyles.appLine}></div>

          <div className={AuthStyles.registerRight}>
            <div className={AuthStyles.registerrightform}>
              <div className={AuthStyles.registerform}>
                <div className={AuthStyles.formhead}>
                  <div className="sm-head" style={{color:'#cccccc88'}}>
                      <p>Start For Free</p>
                  </div>

                  <div className={AuthStyles.bghead}>
                      <h2>Sign Up to We-Chat</h2>
                  </div>
                </div>

                <div className={AuthStyles.formi}>
                  <form>
                    <div className={AuthStyles.actualform}>
                      <div className={AuthStyles.finputs}>
                        <div className={AuthStyles.inputs} style={{gap : '10px'}}>
                          <div className={`name ${AuthStyles.o}`}>
                            <label htmlFor="name">Email</label>
                            <input 
                            type="text" 
                            name='name' 
                            value={registerData.name} 
                            id='name' 
                            onChange={(e) => {
                              setRegisterData((currentValue) => ({
                                    ...currentValue, name : e.target.value
                                }))
                            }} 
                            />

                            <i className='bi bi-person' style={iconStyle}></i>
                          </div>

                          <div className={`email ${AuthStyles.o}`}>
                              <label htmlFor="email">Email</label>
                              <input 
                              type="email" 
                              name='email' 
                              value={registerData.email} 
                              id='email' 
                              onChange={(e) => {
                                setRegisterData((currentValue) => ({
                                      ...currentValue, email : e.target.value
                                  }))
                              }} 
                              />
                              <i className='bi bi-envelope' style={iconStyle}></i>
                          </div>

                          <div className={`password ${AuthStyles.o}`}>
                              <label htmlFor="password">Password</label>
                              <input 
                              type='password' 
                              name='password' 
                              value={registerData.password} 
                              id='password' 
                              onChange={(e) => {
                                setRegisterData((currentValue) => ({
                                      ...currentValue, password : e.target.value
                                  }))
                              }}
                              />
                              <i className='bi bi-lock' style={iconStyle}></i>
                          </div>

                          <div className={`password2 ${AuthStyles.o}`}>
                            <label htmlFor="password2">Confirm Password</label>
                            <input 
                            type='password' 
                            name='password2' 
                            value={registerData.password2} 
                            id='password2' 
                            onChange={(e) => {
                              setRegisterData((currentValue) => ({
                                    ...currentValue, password2 : e.target.value
                                }))
                            }}
                            />
                            <i className='bi bi-lock' style={iconStyle}></i>
                          </div>
                        </div>
                      </div>

                      <div className={AuthStyles.sub}>
                          <div className={AuthStyles.loginbutton}>
                              <button>register</button>
                          </div>

                          <div className={AuthStyles.registerp}>
                              <span>Already have an account ?</span>
                              <Link to='/'>Login</Link>
                          </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
