import React from 'react';
import microsoftLogo from '../asserts/media/microsoft.jpg'; 
import '../asserts/media/App.css';  

const MicrosoftSignInButton = () => {
  const handleMicrosoftSignIn = () => {
    // Simulated sign-in logic (Replace this with actual Microsoft authentication logic)
    // For demonstration, here's a simulated async operation (e.g., API call) that simulates authentication
    simulateSignIn().then(() => {
      // On successful sign-in, perform actions like redirecting to a dashboard or updating the UI
      console.log('User signed in with Microsoft.');
    }).catch((error) => {
      console.error('Sign-in failed:', error);
    });
  };

  const simulateSignIn = () => {
    // Simulated async operation (e.g., API call) that returns a promise
    return new Promise((resolve, reject) => {
      // Simulating an API call with a timeout
      setTimeout(() => {
        // Resolve after 2 seconds (simulating successful sign-in)
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="microsoft-sign-in-container">
      <div className="logo-and-button">
        <img src={microsoftLogo} alt="Microsoft Logo" className="microsoft-logo" />
        <button className="btn btn-light" onClick={handleMicrosoftSignIn}>
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
};

export default MicrosoftSignInButton;
