import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {AuthContext} from "../Context/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";



const Login = () => {

    const [error,setError] = useState('');

    const navigate = useNavigate();
    const {signIn,setLoading} = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || './';

    const handleLogin = (event) => {

        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password).then(res => {
            const user = res.user;
            console.log(user)
           if (user.emailVerified){
               navigate(from,{replace:true});
           }else {
               toast.error("Veryf email")
           }
            setError("");
        }).catch(er => {
            setError(er.message);
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email"type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name ="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;