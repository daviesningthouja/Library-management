import {useState}  from 'react';
import './loginForm.css';
import { Link , useNavigate} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";


import axios from "axios";

const LoginForm = () => {
  // const [enrollmentId, setenrollmentId] = useState('');
  // const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);
  // const [errors, setErrors] = useState({});
  const [value, setValue] = useState({
    enrollmentId:"",
    password:""
  });

  //pass toggle
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  
  const navigate = useNavigate(); //Initialize useNavigate hook
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    let errors = {};
    if (!value.enrollmentId) errors.enrollmentId = 'Enrollment ID is required';
    if (!value.password) errors.password = 'Password is required';
    return errors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/user/login", value);
      console.log(response.data);
      // Redirect or handle success
      navigate("/Dashboard");
    } catch (error) {
      if (error.response) {
        console.log(error.response)
        // Server responded with a status other than 200 range
        if (error.response.status === 404) {
          
          alert('Enrollment ID not found.');
          navigate("/user/Login");
          
        } else if (error.response.status === 401) {
          
          
        alert('Incorrect password. Please try again.');
        
        return navigate("/user/Login");
        } else {
          setErrors({ submit: 'Login failed. Please try again.' });
        }
      } else {
        // Network or other errors
        setErrors({ submit: 'Network error. Please try again later.' });
      
    }
  }
};


  return (
    <main className='body'>
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='EnrollmentId' name="enrollmentId" value={value.enrollmentId}
              onChange={handleChange}
               required/>
          <FaUserCircle className='icons'/>
          {errors.enrollmentId && <p className="error">{errors.enrollmentId}</p>}
        </div>
        <div className="input-box">
          <input type={showPassword ? "text" : "password"}
            placeholder="Enter your password" name="password" value={value.password}
              onChange={handleChange} 
              required />
            <div type="button" onClick={togglePasswordVisibility}>
            {showPassword ? <FaUnlock className='icons' /> : <FaLock className='icons' />}
            </div>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className='remember-forget'>
          <label><input type="checkbox"/>Remenber me</label>
          <Link to="#"> Forget password?</Link>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
            <p>Don&apos;t have an account? <Link to= "/user/registration">Register</Link></p>
        </div>
        
      </form>
    </div>
    </main>
  )
}

export default  LoginForm
