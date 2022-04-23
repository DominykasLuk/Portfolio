import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { RiCloseCircleLine } from 'react-icons/ri'
import { RiInformationLine } from 'react-icons/ri'


const Register = () => {



    return (
        <section id='register'>
            <h2>Register</h2>
            <div className="container login__container">
                <div className="login">
                    <div className="login__content">
                        <form className='login__details'>
                            <label htmlFor="username">
                                Username:
                                <BiCheck />
                                <RiCloseCircleLine />
                            </label>
                            <input
                                placeholder="Username"
                                type="text"
                                id="username"
                            />
                            <p id="uidnote">
                                <RiInformationLine />
                                4 to 24 characters.<br />
                                Must begin with a letter<br />
                                Letters, numbers, underscores, hyphens allowed.<br />
                            </p>

                            <label htmlFor="password">
                                Password:
                                <BiCheck/>
                                <RiCloseCircleLine/>
                            </label>

                            <input
                                placeholder='Password'
                                type="password"
                                id="password"
                            />

                            <p id="pwdnote" >
                                <RiInformationLine />
                                8 to 24 characters.<br />
                                Must include uppercase and lowercase letters, a number and a special character.<br />
                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>

                            <input
                                placeholder='Confirm password'
                                type="password"
                                id="confirm_pwd"
                            />

                            <p id="confirmnote">
                                <RiInformationLine />
                                Must match the first password input field.
                            </p>


                            <button type='submit' className='btn btn-primary'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register