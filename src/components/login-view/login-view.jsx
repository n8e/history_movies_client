import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
export const LoginView = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { user, loading, error } = useSelector((state) => state.user);

    const loginUser = (event) => {
        event.preventDefault();

        dispatch(login(username, password));
    };

    return (
        <Form onSubmit={loginUser}>
            <Form.Group className="mt-3">
                <Form.Label>
                    <h3>Log In</h3>
                </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    className="mb-3"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}

            {loading ? (
                <Spinner animation="border" variant="primary" size="sm" />
            ) : (
                <Button type="submit">Submit</Button>
            )}
        </Form>
    );
};
