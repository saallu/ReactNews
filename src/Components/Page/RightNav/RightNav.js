import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaFacebook, FaTwitch, FaWhatsapp, FaAmazon} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Brandcarosol from "../../Brandcarosol";
import {AuthContext} from "../../Context/AuthProvider";
import {GoogleAuthProvider} from "firebase/auth";

const RightNav = () => {

    const {providerLogIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider).then(res => {
            const user = res.user;
            console.log(user);
        }).catch(er => console.log(er))

    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-dark"> <FaGoogle></FaGoogle> Login with google</Button>
                <Button variant="outline-dark"><FaFacebook></FaFacebook> Login with facebook</Button>

            </ButtonGroup>
            <div>
                <h5>Find us on </h5>
                <ListGroup className="">
                    <ListGroup.Item className="mb-2" ><FaTwitch></FaTwitch> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className="mb-2"> <FaGoogle></FaGoogle> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className="mb-2"> <FaWhatsapp></FaWhatsapp>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className="mb-2"> <FaAmazon></FaAmazon> Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <Brandcarosol></Brandcarosol>
        </div>
    );
};

export default RightNav;