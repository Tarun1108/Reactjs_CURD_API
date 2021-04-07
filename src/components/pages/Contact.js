import React from 'react'
import {Form, Button} from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Me ...</h1>
                <br/>
                {/* <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                               Please Enter Your Email Here...
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                    <Form.Text className="text-muted">
                                              Please Enter Your Password Here...
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form> */}
             <h1>Name: Tarun Rajpoot</h1>
             <br/>
             <h2>Email: tarunrajpoot1108@gmail.com</h2>
             <br/>
             <h2><a href="https://www.linkedin.com/in/tarun-rajpoot-81bbb7136/">LinkedIn</a> </h2>
             
            </div>
        </div>
    );
};

export default Contact;