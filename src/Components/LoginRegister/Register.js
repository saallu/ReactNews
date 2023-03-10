import React, {useContext, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {AuthContext} from "../Context/AuthProvider";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {

    const [error,setError] = useState('');
    const [checked,setChecked] = useState(false);

    const navigate = useNavigate();
    const {createUser,updateUserProfile,veryfiEmail} = useContext(AuthContext)

    const handleEmailVerification = () =>{
        veryfiEmail().then().catch(er => console.log(er))
    }

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(photoURL,name)

        createUser(email,password).then(res => {
            const user = res.user;
            setError('');
            console.log(user);
            handleUpdateProfile(name,photoURL)
            handleEmailVerification();
            toast.success("please verify your email")
        }).catch(e => setError(e.message))

    }

    const handleUpdateUser = () =>{}

    const handleChecked = (event) => {

        setChecked(event.target.checked)

    }

    const handleUpdateProfile = (name,photoURL) => {
        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile).then(()=>{}).catch(er=> console.log(er))

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" placeholder="Enter name" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Photo URL" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name ="password"placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChecked} type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text> <br/>

                <Button variant="primary" type="submit" disabled={!checked}>
                   Login
                </Button>
            </Form>
        </div>
    );
};

export default Register;