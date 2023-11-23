import React from 'react'
import { Form } from 'react-bootstrap'

export default function File({ displayName, name, description, typeFile, active }) {
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>{name}</Form.Label>
            <Form.Control type="file" disabled={active} />
        </Form.Group>
    )
}
