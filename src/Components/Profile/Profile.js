import React, {useContext, useRef, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {AuthContext} from "../Context/AuthProvider";
const Profile = () => {

    const {user} = useContext(AuthContext)
    const [name,setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)

    const handleSubmit = (event)  => {

        event.preventDefault();
        console.log(photoURLRef.current.value)

    }

    const handleNameChange = (event)  => {

        setName(event.target.value)

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly name="email"type="email" defaultValue={user?.email} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleNameChange} name ="name" type="text" defaultValue={user?.displayName}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} name ="photo" type="text" defaultValue={user?.photoURL}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Text className="text-danger">
                </Form.Text>
            </Form>
        </div>
    );
};

export default Profile;