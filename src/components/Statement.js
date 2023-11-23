import React, { useEffect, useState } from 'react'
import testData from '../test.json'
import { Button, Card, Form } from 'react-bootstrap'
import String from './form/String'
import Enum from './form/Enum'
import File from './form/File'
import Comment from './form/Comment'
import ModalWindow from './ModalWindow'
import Signature from './form/Signature'
import axios from 'axios'

export default function Statement() {
    const [sendedNotification, setSendedNotification] = useState(false)
    const [statement, setStatement] = useState({})
    useEffect(() => {
        fetchTestData()
    }, [])
    const fetchTestData = () => {
        try {
            axios.get('https://7fd7db41-3632-40eb-bbaf-36ff1f7cc50a.selstorage.ru/test.json')
                .then(res => {
                    setStatement(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }
    const handlerSubmit = (event) => {
        event.preventDefault()
        console.log('click')
        setSendedNotification(true)
    }
    const handlerCloseNotification = () => {
        setSendedNotification(false)
    }
    return (
        <div>
            <Button onClick={fetchTestData}>Обновить данные</Button>
            <div style={{ margin: "30px" }}>
                <h2>{statement.name}</h2>
                <h5 style={{ color: "#999" }}>{statement.description}</h5>
            </div>
            <div style={{}}>
                {statement.steps && statement.steps.map(step =>
                    <div style={{ display: "flex", borderLeft: "1px solid gray" }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: step.status === "active" ? "green" : "gray",
                            color: "white",
                            borderBottomRightRadius: "50%",
                            width: "50px",
                            height: "50px",
                            fontSize: "25px",
                            marginRight: "10px"
                        }}>{step.number}</div>

                        <Card border={step.userStep ? "success" : "warning"}
                            style={{
                                alignSelf: !step.userStep ? "flex-end" : false,
                                borderWidth: "3px",
                                width: '80%',
                                marginBottom: "20px",
                                boxShadow: step.status === "active" ? "4px 4px 26px 0px rgba(34, 60, 80, 0.68)" : false
                            }}
                            key={step.number}>
                            <Card.Header style={{
                                backgroundColor: step.status === "active" ? (step.userStep ? "rgb(25, 135, 84)" : "rgb(255, 193, 7)") : false
                            }}>
                                <h3 style={{ color: step.status === "active" ? (step.userStep ? "white" : "black") : 'black' }}>{step.name}</h3>
                                <span style={{ color: step.status === "active" ? (step.userStep ? "lightgray" : "gray") : 'gray' }}>{step.description}</span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {step.fields && step.fields.map((field, index) => {
                                        if (field.type === "string")
                                            return <String
                                                key={index}
                                                displayName={field.name}
                                                name={field.displayName}
                                                length={field.length}
                                                active={step.status !== "active" ? true : false} />
                                        if (field.type === "enum")
                                            return <Enum
                                                key={index}
                                                displayName={field.name}
                                                name={field.displayName}
                                                values={field.values}
                                                active={step.status !== "active" ? true : false} />
                                        if (field.type === "file")
                                            return <File
                                                key={index}
                                                displayName={field.name}
                                                name={field.displayName}
                                                values={field.values}
                                                active={step.status !== "active" ? true : false} />
                                        if (field.type === "comment")
                                            return <Comment
                                                key={index}
                                                value={field.value} />
                                        if (field.type === "signature")
                                            return <Signature
                                                key={index}
                                                displayName={field.name}
                                                name={field.displayName}
                                                value={field.value} />

                                    })}
                                    {step.userStep &&
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Button variant="primary"
                                                disabled={step.status !== "active" ? true : false}
                                                onClick={handlerSubmit}>Отправить данные</Button>
                                        </Form.Group>
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            </div>
            {sendedNotification && <ModalWindow handlerClose={handlerCloseNotification} title={'Заявление отправлено'} text={'Данные отправленные Вами находятся на проверке'} />}
        </div>
    )
}
