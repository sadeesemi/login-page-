import React from 'react';
import usePasswordToggle from './components/hoocks/usePasswordToggle';
import './Style.css'; 
import MicrosoftSignInButton from './components/hoocks/MicrosoftSignInButton';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
    const[PasswordInputType,ToggleIcon] = usePasswordToggle();
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleCloseForm = () => {
      setShowLoginForm(false);
    };
  return (
    showLoginForm && (
            
    <div className='login1'>
<div className='login_form'>
<button className='close-button' onClick={handleCloseForm}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        <form>
            <h3 className='topic1'>Welcome back!</h3>
            <div className='mb-2'>
                <label htmlfor="email">Email</label>
                <br />
                <input type="email" placeholder ="Enter email" className='text-field'/>
            </div>
            <div className='mb-2'>
                <label htmlfor="password"> Password</label>
                <br />
                <input type={PasswordInputType} placeholder ="Enter password" className='text-field'/>
                <span className='password-togle-icon' >
                   {ToggleIcon}
                </span>
            </div>
            <p className='p1'>
            <a href='#'> Forgot Pasword?</a>

            </p>
            <div>
                <input type="checkbox" className='custom-control custom checkbox' id='check'/>
                <label htmlfor="check" className='custom-input-label'>Remember me</label>
                
            </div>

            
            <div class="line-container">
  <div class="line"></div>
  <div class="p2">or</div>
  <div class="line"></div>
</div>
<div>
    <MicrosoftSignInButton/>
</div>
<br/>
            
            <div className='d-grid'>
            <button type='button' className='btn btn-success' >
                            Login
                        </button>
            
            </div>
            <p className='text-right'>
                Don't have an account? <a href=''>Sign up</a>

            </p>
        </form>
</div>
      
    </div>
    )
  );
}

export default Login
// comment 1