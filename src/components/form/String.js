import React from 'react'
import { Form } from 'react-bootstrap'

export default function String({ displayName, name, description, length, active }) {
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>{name}</Form.Label>
            <Form.Control type="text" placeholder={description} disabled={active} />
        </Form.Group>
    )
}
