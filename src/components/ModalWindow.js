import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalWindow({ title, handlerClose, text }) {
    return (
        <Modal show={true} onHide={handlerClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handlerClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
}