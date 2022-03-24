import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import style from "./form.module.css";

export default function FORM() {
    const handleNameChange = (e) => {
        console.log(e.target.value);
    };
    const handleEmailChange = (e) => {
        console.log(e.target.value);
    };
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submited");
    };

    return (
        <div>
            <div className="w-25 mx-auto">
                <Card>
                    <Card.Body>
                        <Form action="" onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label
                                    className={style.color}
                                    htmlFor="name"
                                >
                                    Name
                                </Form.Label>{" "}
                                <br />
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    onChange={handleNameChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>{" "}
                                <br />
                                <Form.Control
                                    type="text"
                                    name="email"
                                    id="email"
                                    required
                                    onChange={handleEmailChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password">
                                    Password
                                </Form.Label>{" "}
                                <br />
                                <Form.Control
                                    type="password"
                                    name="password"
                                    id="password"
                                    required
                                    onChange={handlePasswordChange}
                                />
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Button className="w-100" type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
