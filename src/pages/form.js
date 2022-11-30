import {useEffect, useState} from "react";
import {Form, Row, Col} from 'react-bootstrap';

function FormPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        ref: '',
    })

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        formData.firstName = params.get('firstName');
        formData.lastName = params.get('lastName');
        formData.phoneNumber = params.get('phoneNumber');
        formData.email = params.get('email');
        formData.ref = params.get('ref');

        setFormData({...formData});
    }, [])

    return (
        <Row className={'d-flex justify-content-center p-4'}>
            <Col sm={12} md={6}>
                <Form className={'border p-4'}>
                    <Form.Group className="mb-3" controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter first name here"
                                      value={formData.firstName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter last name here"
                                      value={formData.lastName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter phone number here"
                                      value={formData.phoneNumber}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                                      placeholder="Enter email here"
                                      value={formData.email}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ref">
                        <Form.Label>Ref</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter ref here"
                                      value={formData.ref}/>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}

export default FormPage;
