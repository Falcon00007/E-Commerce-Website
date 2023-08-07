import { useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler=(e)=>{
    setEmail(e.target.value);
  }
  const pswrdChangeHandler=(e)=>{
    setPassword(e.target.value);
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    setLoading(true);
    setIsLogin(false);
    setEmail("");
    setPassword("");
  }

  let changeBtn=   <button
  type='button'
  className={classes.toggle}
  onClick={switchAuthModeHandler}
>           
{isLogin ? 'Create new account' : 'Login with existing account'} </button>

  let submitButton =<button
  type='submit'
  className={classes.loginBtn}
  onClick={onSubmitHandler}
> {isLogin ? "Log In" : "Create Account"} </button>
 
return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' value={email} onChange={emailChangeHandler} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password' id='password' value={password} onChange={pswrdChangeHandler} required />
        </div>
        <div className={classes.submitBtn}>
          {!loading && submitButton} 
            </div>
            {loading && <h2>Submitting Data...</h2>}
            <div className={classes.actions}>
           {!loading && changeBtn}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
