import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
    return (
        <div>
            
            <h2 className="loginTitle white-text">Login</h2>
            <hr/>
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" className="username" placeholder="username" value={props.username} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" className="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                </FormGroup>
        <p className="loginBtn text-center">
                <Button onClick={props.handleLogin}>Login</Button></p>

                <p className="signupLink text-center">
                    <Button href="/signup">Signup</Button>
                </p>
            </Form>
        </div>
    );
}

export default Login;