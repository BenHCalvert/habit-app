import React from "react";
import "./Profile.css";
import { UserConsumer } from '../../context';
import { Button, Table, Form } from "reactstrap";
import { Link } from "react-router-dom"
import Nav from "../../components/Nav";
import { Row, Container } from "../../components/Grid";
import EarnedStars from "../../components/EarnedStars";



function Profile(props) {
    return (
        // console.log(this.props),
        <Container fluid>
        <Nav/>
        <UserConsumer>
        {({ data, logout }) => (
        <div className="profileBox text-center">
            {(data.loggedIn)? (
                <div className="accountdiv">
                    <h1> View Your <Link to="/habits">Starcharts</Link>, {data.user.firstname}</h1>
                    <br></br>


                <h2>Account Info</h2>
                <br></br>
                <Form>
                    <Table className="infotable ">
                            <tbody className="infotable">
                                <tr>
                                    
                                    <td className="text-center">First Name</td>
                                    <td>{data.user.firstname}</td>
                                    {/* <th>Username</th> */}
                                </tr>
                            
                            
                                <tr>
                                    
                                    <td>Last Name</td>
                                    <td>{data.user.lastname}</td>
                                    {/* <td>@mdo</td> */}
                                </tr>
                                <tr>
                                    
                                    <td>Email</td>
                                    <td>{data.user.email}</td>
                                    {/* <td>@fat</td> */}
                                </tr>
                                <tr>
                                   
                                    <td>Number of Stars</td>
                                    <td><EarnedStars stars={data.user.stars}/></td>
                                    {/* <td>@twitter</td> */}
                                </tr>
                            </tbody>
                    </Table></Form>
<br></br>

                
                  
                    {/* <tbody> */}
                    
                    {/* <td><h3>User Email: </h3></td><p>{data.user.email}</p>
                    <h3>User First Name: {data.user.firstname}</h3>
                    <h3>User Last Name: {data.user.lastname}</h3>
                    <h3>Number of Stars: {}</h3> */}
                    {/* </tbody> */}

              
                    <Button onClick={logout}>Logout</Button>


                </div>
            ): (
                <div>
                    <h2> <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to start forming <br></br>habits and track your progress! </h2>
                    {/* <Link to="/login"><Button> Login </Button></Link>
                    <Link to="/signup"><Button> Signup </Button></Link> */}
                    
                </div>
            )}
        </div>
      )}
      </UserConsumer>
      </Container>
    )
    
}

export default Profile;
