import React from 'react'
import { Image } from 'react-bootstrap'
import pdf from '../../img/pdf.png'

export default function Signature({ displayName, name, description, length, active }) {
    return (<>
        <h3>{name}</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
            <div>
                <Image src={pdf} width={100} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{cursor:"pointer"}}>Посмотреть</p>
                <p style={{cursor:"pointer"}}>Подписать</p>
                <p style={{cursor:"pointer"}}>Отклонить</p>
            </div>

        </div>
    </>
    )
}
