import { Link, useNavigate  } from 'react-router-dom'
import { useAuth } from "@contexts/authContext"
import useFormData from '@hooks/useFormData'
import MyInput from '@UI/Myinput/MyInput'
import classes from './styles.module.scss'

function Register() {

  const registrationData = useFormData()
  const auth = useAuth()
  const navigate = useNavigate()

  const registrationFormHandler = (e)=>{

      e.preventDefault();

      auth.registration('/auth/registration', registrationData.getData())
          .then(()=>{ navigate('/', {replace:true}) })
          .catch((error)=>{
              console.error('error',error)
              if(error.response.status == 422) registrationData.setError(error.response.data.errors)    
      })
  }
  return (
    <div className={classes.register}>
      <div className={classes.card}>
        <div className={classes.left}>
          <h1>My social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit rem repellat ea modi dolorum sequi deserunt nisi minus ipsa distinctio consequuntur, odio ullam eaque iusto dolores veritatis numquam. Reprehenderit!
          </p>
          <span>Do you have an account?</span>          
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className={classes.right}>
          <h1>Register</h1>
          <div>
            <form onSubmit={registrationFormHandler}>
            <MyInput name='name' type='text' placeholder='Username'  bindData={registrationData} />
            <MyInput name='email' type='text' placeholder='Email'     bindData={registrationData} />
            <MyInput name='password' type='password' placeholder='Password'  bindData={registrationData} />
            <MyInput name='password_confirmation' type='password' placeholder='Password confirmation' bindData={registrationData} />
              <button onClick={registrationFormHandler}>Register</button>
            </form>
            <div className={classes.login_link_mobile}>
                Already have an account? 
                <Link  to='/login'>
                  Login
                </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}
  
  export default Register
  