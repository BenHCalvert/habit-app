import React from "react";
import "./Profile.css";
import { UserConsumer } from '../../context';
import { Button } from "reactstrap";
import { Link } from "react-router-dom"


function Profile(props) {
    return (
        // console.log(this.props),
        <UserConsumer>
        {({ data, logout }) => (
        <div className="profileBox text-center">
            {(data.loggedIn)? (
                <div>
                    <h1> View Your Starcharts, {data.user.firstname}</h1>
                    <Button onClick={logout}>Logout</Button>
                </div>
            ): (
                <div>
                    <h1> Log in to view this page </h1>
                    <Link to="/login"><Button> Login </Button></Link>
                    
                </div>
            )}
        </div>
      )}
      </UserConsumer>
    )
    
}

export default Profile;
