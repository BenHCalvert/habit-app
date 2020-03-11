import React from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import "./Auth.css";
import { UserConsumer } from '../../context';

function Auth(props) {
  return (
    <UserConsumer>
      {({ data, inputChange, handleLogin, handleSignup }) => (
        <div className="authBox">
          <div className= "text center">
          {(props.action === "login") ? (
            <Login
              username={data.username}
              password={data.password}
              handleInputChange={inputChange}
              handleLogin={handleLogin}
            />
          ) : (
              <Signup
                firstname={data.firstname}
                lastname={data.lastname}
                email={data.email}
                username={data.username}
                password={data.password}
                handleInputChange={inputChange}
                handleSignup={handleSignup}
                message={data.failureMessage}
              />
            )}</div>
        </div>
      )}
    </UserConsumer>
  );
}


export default Auth;