import { Link, useNavigate } from 'react-router-dom'
import classes from './styles.module.scss'
import LoginBtn from '@components/loginBtn/loginBtn'
import useFormData from '@hooks/useFormData'
import { useAuth } from "@contexts/authContext"
import MyInput from '@UI/Myinput/MyInput'

function Login() {
  const navigate = useNavigate()
  const loginForm = useFormData()
  const auth = useAuth()

  const loginFormHandler = (ev)=> {
      
      ev.preventDefault()

      auth.login('/auth/login', loginForm.getData())
          .then(() => navigate('/', {replace:true}))
          .catch((error)=>{
              if(error.response.status == 422) loginForm.setError(error.response.data.errors)
          })
  }
    return (
      <div className={classes.login}>
        <div className={classes.card}>
          <div className={classes.left}>
            <h1>Hello word</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit rem repellat ea modi dolorum sequi deserunt nisi minus ipsa distinctio consequuntur, odio ullam eaque iusto dolores veritatis numquam. Reprehenderit!
            </p>
            <span>Don't you have an account?</span>
            <Link to='/registration'>
              <button>Register</button>
            </Link>
          </div>
          <div className={classes.right}>
            <h1>Login</h1>
            <form onSubmit={loginFormHandler}>
                <MyInput name='email' type='text' placeholder='Username' bindData={loginForm} />
                <MyInput name='password' type='Password' bindData={loginForm}/>  
              <LoginBtn handler={loginFormHandler}/>
              <div className={classes.register_link_mobile}>
                Not registered yet? 
                <Link  to='/registration'>
                  Registration
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login
  