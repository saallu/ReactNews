import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftNav from "../LeftNav/LeftNav";
import {AuthContext} from "../../Context/AuthProvider";
import {Button, Image} from "react-bootstrap";
import {FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {
    const {user,logout} = useContext(AuthContext);

    function logOut() {
       return  logout().then(res => {

        }).catch(er => console.log(er))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  >
                <Container>
                    <Navbar.Brand href="/">News Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Link to="/profile">
                                {
                                    user?.uid?
                                        <>
                                            <span>{
                                                user?.displayName
                                            }
                                            </span>
                                            <Button onClick={logOut} className="ms-3" variant="outline-dark">Log out</Button>
                                        </>:
                                        <>
                                            <Link to='/login'>
                                                <Button  variant="outline-dark">Log In</Button>

                                            </Link>
                                            <Link to='/register'>
                                                <Button  variant="outline-dark">Register</Button>

                                            </Link>
                                        </>
                                }
                            </Link>
                            <Link to="/profile">
                                {user?.photoURL ?
                                <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>:
                                    <FaUser></FaUser>

                                }
                            </Link>
                        </Nav>
                        <div className="d-lg-none">
                            <LeftNav></LeftNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;