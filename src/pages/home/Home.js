import React from 'react';
import './home.css';

const Home = () => {

  const goToRegister = () => {
    window.location = "/signup"
  }




  window.document.body.style.backgroundColor = "rgba(41, 139, 229, 1)"


  return (
  <div className="main__mainContainer">
    <div className={"home__image"}><img src="https://www.semmelweiskiado.hu/images/termekek/2/1691/semmelweis_kiado_logo_1608213956.jpg" alt="logo"/></div>
    <div className="main__LoginContainer">
      <form >
        <input placeholder={"username"} type="text" className="main__usernameInput"/><br/>
        <input placeholder={"password"} type="password" className="main__passwordInput"/>
      </form>
    </div>
    <div className="main__buttonContainer">
      <button className={'main__loginButton'} >Login</button>
      <button onClick={goToRegister}  className={'main__registerButton'}>Register</button>
    </div>
  </div>
  );
};

export default Home;
