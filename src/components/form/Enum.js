import React from 'react'
import { Form } from 'react-bootstrap'

export default function Enum({ displayName, name, description, values, active }) {
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>{name}</Form.Label>
            <Form.Select aria-label={description} disabled={active}>
                <option>Выбрать из списка...</option>
                {values && values.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
            </Form.Select>
        </Form.Group>
    )
}
